import { shuffleAnswers } from "../utils/shuffleAnswers";

const API_URL = "https://opentdb.com/api_config.php";

function decodeHtml(text) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = decodeURIComponent(text);
  return textarea.value;
}

export async function fetchQuizQuestions(amount, difficulty) {
  const url = `${API_URL}?amount=${amount}&category=21&difficulty=${difficulty}&type=multiple&encode=url3986`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les questions depuis l'API.");
  }

  const data = await response.json();

  if (data.response_code !== 0) {
    throw new Error("L'API n'a pas pu fournir les questions demandées.");
  }

  if (!data.results || data.results.length < amount) {
    throw new Error("Pas assez de questions disponibles.");
  }

  return data.results.map((item, index) => {
    const correctAnswer = decodeHtml(item.correct_answer);
    const incorrectAnswers = item.incorrect_answers.map((answer) =>
      decodeHtml(answer),
    );

    return {
      id: index,
      question: decodeHtml(item.question),
      difficulty: item.difficulty,
      correctAnswer,
      answers: shuffleAnswers([correctAnswer, ...incorrectAnswers]),
    };
  });
}
