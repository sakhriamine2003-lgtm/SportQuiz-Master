import React from "react";

// 1. Props: 'questions' w 'userAnswers'  --> US11
function ResultScreen({ score, total, questions, userAnswers, onReset }) {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md">
      {/* Score */}
      <div className="text-center border-b pb-4 mb-6 font-bold">
        <h2 className="text-2xl italic">
          Score Final: {score} / {total}
        </h2>
        <button
          onClick={onReset}
          className="bg-purple-600 text-white p-2 rounded-lg mt-2"
        >
          🔄 Rejouer
        </button>
      </div>

      {/* Détails des réponses */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-700">Détails de vos réponses:</h3>

        {questions.map((q, index) => {
          const userAnswer = userAnswers[index] || "";
          const correctAnswer = q.correctAnswer || "";

          // Fixed comparison: convert to string and trim spaces
          const isCorrect =
            String(userAnswer).trim() === String(correctAnswer).trim();

          return (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
            >
              <p className="font-semibold text-gray-800">
                {index + 1}. {q.text}
              </p>

              <div className="mt-2 text-sm">
                <p>
                  <span className="text-gray-500 font-bold">Ta réponse: </span>
                  <span
                    className={
                      isCorrect ? "text-green-600" : "text-red-600 font-bold"
                    }
                  >
                    {userAnswer || "Ma-jawbtich"} {isCorrect ? "✅" : "❌"}
                  </span>
                </p>

                {!isCorrect && (
                  <p className="mt-1 text-green-700 font-medium">
                    <span className="text-gray-500 font-bold">
                      Réponse correcte:{" "}
                    </span>
                    {correctAnswer}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResultScreen;
