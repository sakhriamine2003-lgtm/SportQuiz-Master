import { useState, useEffect } from "react";

export default function Timer({ duration = 30, onTimeUp, currentQuestionIndex }) {
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
        <div className="flex items-center gap-2">
            <div className={`px-4 py-2 rounded-2xl font-bold shadow-sm transition-all
                ${timeLeft <= 5
                    ? "bg-red-100 text-red-500 animate-pulse"
                    : "bg-[#F3EFFF] text-[#8D6DEE]"
                }`}>
                {timeLeft}s
            </div>
        </div>
    );
}