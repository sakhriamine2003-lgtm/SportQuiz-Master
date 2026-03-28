import { useState, useEffect } from "react";

function Timer({ duration = 30, onTimeUp, currentQuestionIndex }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [currentQuestionIndex, duration]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <div
      className={`px-4 py-2 rounded-xl font-bold ${
        timeLeft <= 5
          ? "bg-red-100 text-red-500 animate-pulse"
          : "bg-purple-100 text-purple-600"
      }`}
    >
      {timeLeft}s
    </div>
  );
}

export default Timer;