function ResultScreen({ score, total, questions, userAnswers, onReset }) {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md">
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

      <div className="space-y-4">
        {questions.map((q, index) => {
          const userAnswer = userAnswers[index] || "";
          const correctAnswer = q.correctAnswer || "";

          const isCorrect =
            String(userAnswer).trim() === String(correctAnswer).trim();

          return (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 ${
                isCorrect
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }`}
            >
              <p className="font-semibold text-gray-800">
                {index + 1}. {q.text || q.question}
              </p>

              <p>
                Ta réponse:{" "}
                <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                  {userAnswer || "Non répondu"}
                </span>
              </p>

              {!isCorrect && (
                <p className="text-green-700">
                  Réponse correcte: {correctAnswer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResultScreen;