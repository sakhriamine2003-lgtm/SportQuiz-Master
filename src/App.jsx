import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import QuizConfig from "./component/QuizConfig";
import QuestionCard from "./component/QuestionCard";
import ProgressBar from "./component/ProgressBar";
import Timer from "./component/Timer";
import ResultScreen from "./component/ResultScreen";
import Loader from "./component/Loader";
import ErrorMessage from "./component/ErrorMessage";

import Header from "./utils/Header";
import Footer from "./utils/Footer";

import { fetchQuizQuestions } from "./services/quizApi";

function App() {
  const [settings, setSettings] = useState({
    amount: 10,
    difficulty: "easy",
  });

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startQuiz = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchQuizQuestions(
        settings.amount,
        settings.difficulty,
      );

      setQuestions(data);
      setStarted(true);
      setFinished(false);

      setCurrentIndex(0);
      setScore(0);
      setUserAnswers([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ========================
  // ANSWER
  // ========================
  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentIndex];

    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [...prev, answer]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  // ========================
  // RESET
  // ========================
  const resetQuiz = () => {
    setStarted(false);
    setFinished(false);
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers([]);
  };

  // ========================
  // UI
  // ========================
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-100 p-4">
              {/* LOADING */}
              {loading && <Loader />}

              {/* ERROR */}
              {error && (
                <ErrorMessage
                  error={error}
                  onRetry={startQuiz}
                  onBack={() => setError("")}
                />
              )}

              {/* CONFIG */}
              {!started && !loading && !error && (
                <QuizConfig
                  settings={settings}
                  setSettings={setSettings}
                  onStart={startQuiz}
                  loading={loading}
                />
              )}

              {/* QUIZ */}
              {started && !finished && !loading && questions.length > 0 && (
                <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
                  <ProgressBar
                    current={currentIndex + 1}
                    total={questions.length}
                  />

                  <div className="flex justify-between items-center mb-6">
                    <div className="bg-purple-100 px-4 py-2 rounded-xl">
                      Score : {score}
                    </div>

                    <Timer
                      duration={30}
                      currentQuestionIndex={currentIndex}
                      onTimeUp={() => handleAnswer(null)}
                    />
                  </div>

                  <QuestionCard
                    question={questions[currentIndex].question}
                    answers={questions[currentIndex].answers}
                    correctAnswer={questions[currentIndex].correctAnswer}
                    onAnswer={handleAnswer}
                  />
                </div>
              )}

              {/* RESULT */}
              {finished && (
                <ResultScreen
                  score={score}
                  total={questions.length}
                  questions={questions}
                  userAnswers={userAnswers}
                  onReset={resetQuiz}
                />
              )}
            </div>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
