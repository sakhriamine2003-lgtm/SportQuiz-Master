// import { shuffleAnswers } from "../utils/shuffleAnswers";

export async function fetchQuizQuestions(amount, difficulty) {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=21&difficulty=${difficulty}&type=multiple`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les questions.");
  }

  const data = await response.json();

  return data.results.map((item, index) => ({
    id: index,
    question: item.question,
    difficulty: item.difficulty,
    correctAnswer: item.correct_answer,
    // answers: shuffleAnswers([item.correct_answer, ...item.incorrect_answers]),
  }));
}
