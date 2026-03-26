import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizConfig from "./component/QuizConfig";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import { fetchQuizQuestions } from "./services/quizApi";
import Loader from "./component/Loader";
import ErrorMessage from "./component/ErrorMessage";
function App() {
  const [settings, setSettings] = useState({
    amount: 10,
    difficulty: "easy",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const startQuiz = async () => {
    try {
      setLoading(true);
      setError("");
      // console.log("Settings :", settings);

      const data = await fetchQuizQuestions(
        settings.amount,
        settings.difficulty,
      );

      console.log("Questions reçues :", data);
      setLoading(false);
    } catch (err) {
      console.log("Erreur :", err.message);
      setError(err.message);
      setLoading(false);
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
              <>
                {loading ? (
                  <Loader />
                ) : error ? (
                  <ErrorMessage
                    error={error}
                    onRetry={startQuiz}
                    onBack={() => setError("")}
                  />
                ) : (
                  <QuizConfig
                    settings={settings}
                    setSettings={setSettings}
                    onStart={startQuiz}
                    loading={loading}
                  />
                )}
              </>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
// =======
// import './index.css'; // <--- HAD L-STER DARORI BACH TAILWIND I-KHDEM
// import ProgressBar from "./component/ProgressBar";
// import Timer from './component/Timer';
// function App() {
//   const [current, setCurrent] = useState(1);
//   const total = 10;
//   return (
//     <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center p-5">
//       <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sport Quiz</h1>
//         {}
//         <ProgressBar current={current} total={total}/>
//         <div className="flex justify-between items-center mt-6">
//           {}
//           <Timer
//             duration={30}
//             currentQuestionIndex={current}
//             onTimeUp={()=> alert("le temps est ecoule!")}
//             />
//             {}
//             <button onClick={()=>setCurrent(prev =>(prev < total ? prev+1 : prev))}
//             className="bg-[#8D6DEE] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
//               Suivant
//             </button>
//         </div>
//       </div>
//     </div>
// >>>>>>> origin/optiionQuiz
  );
}

export default App;
