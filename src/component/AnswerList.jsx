function AnswerList({ answers, onSelect, selected, correctAnswer }) {
  return (
    <div className="space-y-3">
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => onSelect(answer)}
          className={`w-full p-3 rounded-lg border ${
            selected
              ? answer === correctAnswer
                ? "bg-green-500 text-white"
                : answer === selected
                  ? "bg-red-500 text-white"
                  : "bg-gray-100"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default AnswerList;
