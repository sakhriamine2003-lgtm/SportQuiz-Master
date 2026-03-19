import React, { useState } from "react";
import ProgressBar from "./component/ProgressBar";
import Timer from './component/Timer';

function App() {
  const [current, setCurrent] = useState(1);
  const total = 10;
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center p-5">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sport Quiz</h1>
        {}
        <ProgressBar current={current} total={total}/>
        <div className="flex justify-between items-center mt-6">
          {}
          <Timer
            duration={30}
            currentQuestionIndex={current}
            onTimeUp={()=> alert("le temps est ecoule!")}
            />
            {}
            <button onClick={()=>setCurrent(prev =>(prev < total ? prev+1 : prev))}
            className="bg-[#8D6DEE] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
              Suivant
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
