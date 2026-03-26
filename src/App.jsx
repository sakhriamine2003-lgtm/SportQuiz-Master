import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizConfig from "./component/QuizConfig";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import { fetchQuizQuestions } from "./services/quizApi";
import Loader from "./component/Loader";
import ErrorMessage from "./component/ErrorMessage";
function App() {
  const [settings, setSettings] = useState({
    amount: 10,
    difficulty: "easy",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startQuiz = async () => {
    try {
      setLoading(true);
      setError("");
      // console.log("Settings :", settings);

      const data = await fetchQuizQuestions(
        settings.amount,
        settings.difficulty,
      );

      console.log("Questions reçues :", data);
      setLoading(false);
    } catch (err) {
      console.log("Erreur :", err.message);
      setError(err.message);
      setLoading(false);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {loading ? (
                  <Loader />
                ) : error ? (
                  <ErrorMessage
                    error={error}
                    onRetry={startQuiz}
                    onBack={() => setError("")}
                  />
                ) : (
                  <QuizConfig
                    settings={settings}
                    setSettings={setSettings}
                    onStart={startQuiz}
                    loading={loading}
                  />
                )}
              </>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
