import React, { useState } from "react";
import AnswerList from "./AnswerList";

function QuestionCard({ question, answers, onAnswer, correctAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (answer) => {
    setSelected(answer); // change color
    onAnswer(answer); // send answer to App
  };

  return (
    <div>
      <h2 className="text-xl font-bold mt-4">{question}</h2>

      <div className="mt-4">
        <AnswerList
          answers={answers}
          onSelect={handleSelect}
          selected={selected}
          correctAnswer={correctAnswer}
        />
      </div>
    </div>
  );
}

export default QuestionCard;
