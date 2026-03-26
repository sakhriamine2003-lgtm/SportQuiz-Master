import { useState } from "react";
const [isFiftyUsed, setIsFiftyUsed] = useState(false);

// 2. L-lista d l-ajwiba li ghadi n-khbiw f had l-question
const [hiddenOptions, setHiddenOptions] = useState([]);

const handleFiftyFifty = () => {
  if (isFiftyUsed) return; // Ma-idir walou ila t-khdem qbel

  // A. N-jebdou ghir l-ajwiba li ghaltin
  const incorrectOnes = currentQuestion.options.filter(
    (option) => option !== currentQuestion.correctAnswer,
  );

  // B. N-khtaru joj ghaltin random bach n-ghabrohom
  // N-mélangew l-ghaltin w n-akhdu l-joj l-owlin
  const toHide = incorrectOnes.sort(() => 0.5 - Math.random()).slice(0, 2);

  setHiddenOptions(toHide); // N-7etlohom f state bach n-ghabrohom
  setIsFiftyUsed(true); // N-markiw l-bonus bli t-khdem
};

{
  currentQuestion.options.map((option, index) => (
    <button
      key={index}
      disabled={hiddenOptions.includes(option)} // Disable ila t-khba
      className={`p-4 rounded-xl border-2 transition-all 
      ${hiddenOptions.includes(option) ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {option}
    </button>
  ));
}

// function QuizConfig() {
//   return (
//     <div className="min-h-screen bg-[#f5f4f7] px-4 py-6">
//       <div className="mx-auto max-w-sm rounded-3xl bg-white p-5 shadow-md">
//         <h2 className="mb-5 text-xl font-bold text-slate-800">
//           Configurer le quiz
//         </h2>

//         <div className="space-y-4">
//           <div>
//             <label className="mb-2 block text-sm font-semibold text-slate-600">
//               Nombre de questions
//             </label>
//             <select className="w-full rounded-2xl bg-[#f1edf3] px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-purple-400">
//               <option value={5}>5</option>
//               <option value={10}>10</option>
//               <option value={15}>15</option>
//             </select>
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-semibold text-slate-600">
//               Difficulté
//             </label>
//             <select className="w-full rounded-2xl bg-[#f1edf3] px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-purple-400">
//               <option value="easy">Facile</option>
//               <option value="medium">Moyen</option>
//               <option value="hard">Difficile</option>
//             </select>
//           </div>
//         </div>

//         <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#2d0ea8] to-[#6d2cf3] px-4 py-3 font-semibold text-white shadow-md transition active:scale-[0.98]">
//           Commencer
//         </button>
//       </div>
//     </div>
//   );
// }
// export default QuizConfig;

function QuizConfig({ settings, setSettings, onStart, loading }) {
  return (
    <div className="min-h-screen bg-[#f5f4f7] px-4 py-6">
      <div className="mx-auto max-w-sm rounded-3xl bg-white p-5 shadow-md">
        <h2 className="mb-5 text-xl font-bold text-slate-800">
          Configurer le quiz
        </h2>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Nombre de questions
            </label>
            <input
              type="text"
              value={settings.amount}
              onChange={(e) => {
                const value = Number(e.target.value);
                const regex = /^(50|[1-9]|[1-4][0-9])?$/;

                if (regex.test(value)) {
                  setSettings({
                    ...settings,
                    amount: value === "" ? "" : Number(value),
                  });
                }
              }}
              className="w-full rounded-2xl bg-[#f1edf3] px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-600">
              Difficulté
            </label>
            <select
              value={settings.difficulty}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  difficulty: e.target.value,
                })
              }
              className="w-full rounded-2xl bg-[#f1edf3] px-4 py-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="easy">Facile</option>
              <option value="medium">Moyen</option>
              <option value="hard">Difficile</option>
            </select>
          </div>
        </div>

        <button
          onClick={onStart}
          disabled={loading}
          className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#2d0ea8] to-[#6d2cf3] px-4 py-3 font-semibold text-white shadow-md transition active:scale-[0.98]"
        >
          {loading ? "Chargement..." : "Commencer"}
        </button>
      </div>
    </div>
  );
}

export default QuizConfig;
// =======
// import ProgressBar from "./ProgressBar";

// const [score, setScore]= useState(0);
// const [currentIndex, setCurrentIndex]= useState(0);

// const handleAnswer = (isCorrect)=>{
//     if(isCorrect){
//         setScore(prev=> prev + 10);
//     }
//     if (currentIndex < questions.length -1){
//         setCurrentIndex(prev => prev +1);
//     }else{

//     }
// };
// return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-3xl shadow-sm border border-gray-1000">
//         {}
//         <ProgressBar current={currentIndex +1} total={questions.length}/>

//         <div className="flex justify-between items-center mb-6">
//             {}
//             <div className="bg-[#F3EFFF] px-4 py-2 rounded-2xl border border-[#E0D5FF]">
//                 <span className="text-[#8D6DEE] font-bold text-sm">Score : {score}</span>
//             </div>
//             {}
//             <Timer
//             currentQuestionIndex={currentIndex}
//             onTimeUp={()=> handleAnswer(false)}
//             />
//         </div>
//         {}
//         <QuestionCard
//         question={questions[currentIndex]}
//         onAnswer={handleAnswer}
//         />
//     </div>
// );
// >>>>>>> origin/optiionQuiz
