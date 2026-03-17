import { useState, useEffect } from "react";
import array from "./test";


export function Quiz() {
  const [Index, setIndex] = useState(0);
  const [quiz, setquiz] = useState([]);

  useEffect(() => {
    const reponse = [...quizData[Index].reponse];
    reponse.sort(() => Math.random() - 0.5);
    setquiz(reponse);
  }, 
  [Index]);

  
}
