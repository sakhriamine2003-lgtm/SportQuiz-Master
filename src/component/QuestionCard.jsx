import { useState } from "react";
import table from "./test";

export function QuizData() {
  const [questions, setQuestions] = useState(table); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(table[0].answers);

const shuffleQuiz = () => {
  const shuffledQuestions = [...questions].sort(() => Math.random());
  setQuestions(shuffledQuestions);

   const shuffledAnswers = [...shuffledQuestions[0].answers].sort(() => Math.random());
  setAnswers(shuffledAnswers);

  setCurrentIndex(0); 
}}