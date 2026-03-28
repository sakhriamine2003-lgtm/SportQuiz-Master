function AnswerList({ answers, onSelect, selected }) {
  return (
    <div className="space-y-3">
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => onSelect(answer)}
          className={`w-full p-3 rounded-lg border 
          ${selected === answer ? "bg-green-200" : "bg-gray-100"}`}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}

export default AnswerList;