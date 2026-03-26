import { useState } from "react";
import ProgressBar from "./ProgressBar";
import table from "./test";

export default function QuestionCard() {
  const [questions] = useState(table);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="p-6">
      {/* ProgressBar */}
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      {/* Question */}
      <h2 className="text-xl font-bold mt-4">
        {questions[currentIndex].question}
      </h2>

      {/* Answers */}
      <div className="mt-4 space-y-2">
        {questions[currentIndex].answers.map((ans, i) => (
          <button
            key={i}
            className="w-full bg-blue-500 text-white py-2 rounded-lg"
          >
            {ans}
          </button>
        ))}
      </div>

      {/* Bouton suivant */}
      <button
        onClick={handleNext}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg"
      >
        Suivant
      </button>
    </div>
  );
}
