import {useState, useEffect} from "react";

export default function Timer({duration =30, onTimeUp, currentQuestionIndex}){
    const [timeLeft, setTimeLeft] = useState(duration);
}