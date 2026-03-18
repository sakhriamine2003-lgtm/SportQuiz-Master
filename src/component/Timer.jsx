import {useState, useEffect} from "react";

export default function Timer({duration =30, onTimeUp, currentQuestionIndex}){
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(()=>{
        setTimeLeft(duration);
    },[currentQuestionIndex, duration]);
    
    useEffect(()=>{
        if(timeLeft===0){
            onTimeUp();
            return;
        }
        const timer = setInterval(()=>{
            setTimeLeft((prev)=>prev -1);
        },1000);
        return ()=> clearInterval(timer);
    },[timeLeft, onTimeUp]);
}