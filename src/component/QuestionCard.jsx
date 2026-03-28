import React from "react";
import AnswerList from "./AnswerList";

function QuestionCard({ question, answers, onAnswer }) {
  return (
    <div>
      <h2 className="text-xl font-bold mt-4">{question}</h2>

      <div className="mt-4">
        <AnswerList answers={answers} onSelect={onAnswer} />
      </div>
    </div>
  );
}

export default QuestionCard;