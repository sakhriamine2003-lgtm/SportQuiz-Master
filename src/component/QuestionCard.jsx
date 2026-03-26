import { useState } from "react";
import table from "./test";

export default function QuestionCard() {
  const [questions, setQuestions] = useState(table);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(table[0].answers);

  const shuffleQuiz = () => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);

    const shuffledAnswers = [...shuffledQuestions[0].answers].sort(
      () => Math.random() - 0.5,
    );
    setAnswers(shuffledAnswers);

    setCurrentIndex(0);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);

      const shuffledAnswers = [...questions[currentIndex + 1].answers].sort(
        () => Math.random() - 0.5,
      );
      setAnswers(shuffledAnswers);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-xl font-bold mb-4">
          {questions[currentIndex].question}
        </h2>

        <div className="space-y-3">
          {answers.map((ans, index) => (
            <button
              key={index}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {ans}
            </button>
          ))}
        </div>

        <div className="flex gap-12 mt-4">
          <button
            onClick={handleNext}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Question suivante
          </button>

          <button onClick={shuffleQuiz} className="w-10">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3917/3917293.png"
              alt="logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
