import { shuffleAnswers } from "../utils/shuffleAnswers";

// ✅ fonction pour décoder les caractères HTML (&quot;, &amp;, etc.)
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export async function fetchQuizQuestions(amount, difficulty) {
  const url = `https://opentdb.com/api.php?amount=${amount}&category=21&difficulty=${difficulty}&type=multiple`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les questions.");
  }

  const data = await response.json();

  return data.results.map((item, index) => ({
    id: index,

    // ✅ décodage du texte
    question: decodeHTML(item.question),

    difficulty: item.difficulty,

    correctAnswer: decodeHTML(item.correct_answer),

    // ✅ correction: utiliser "answers" (cohérent avec ton App)
    answers: shuffleAnswers(
      [
        item.correct_answer,
        ...item.incorrect_answers,
      ].map(decodeHTML)
    ),
  }));
}