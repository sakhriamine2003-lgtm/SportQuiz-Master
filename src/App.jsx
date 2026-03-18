import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizConfig from "./component/QuizConfig";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import { fetchQuizQuestions } from "./services/quizApi";

function App() {
  const [settings, setSettings] = useState({
    amount: 10,
    difficulty: "easy",
  });

  const startQuiz = async () => {
    try {
      console.log("Settings :", settings);

      const data = await fetchQuizQuestions(
        settings.amount,
        settings.difficulty,
      );

      console.log("Questions reçues :", data);
    } catch (err) {
      console.log("Erreur :", err.message);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <QuizConfig
                settings={settings}
                setSettings={setSettings}
                onStart={startQuiz}
              />
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
