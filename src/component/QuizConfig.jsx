import { useState } from "react";
import ProgressBar from "./ProgressBar";

const [score, setScore]= useState(0);
const [currentIndex, setCurrentIndex]= useState(0);

const handleAnswer = (isCorrect)=>{
    if(isCorrect){
        setScore(prev=> prev + 10);
    }
    if (currentIndex < questions.length -1){
        setCurrentIndex(prev => prev +1);
    }else{

    }
};
return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-3xl shadow-sm border border-gray-1000">
        {}
        <ProgressBar current={currentIndex +1} total={questions.length}/>

        <div className="flex justify-between items-center mb-6">
            {}
            <div className="bg-[#F3EFFF] px-4 py-2 rounded-2xl border border-[#E0D5FF]">
                <span className="text-[#8D6DEE] font-bold text-sm">Score : {score}</span>
            </div>
            {}
            <Timer 
            currentQuestionIndex={currentIndex}
            onTimeUp={()=> handleAnswer(false)}
            />
        </div>
        {}
        <QuestionCard
        question={questions[currentIndex]}
        onAnswer={handleAnswer}
        />
    </div>
);