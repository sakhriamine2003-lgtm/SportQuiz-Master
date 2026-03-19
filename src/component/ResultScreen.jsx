import React from 'react';

function ResultScreen({ score, totalQuestions, onReset }) {
  
  const message = score > (totalQuestions / 2) ? "Bravo! Tbarkellah 3lik ⚽" : "Dommage! 3awd t-traina 🏃‍♂️";

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-xl border-t-8 border-purple-600 max-w-sm mx-auto mt-10">
      
      
      <div className="text-6xl mb-4">🏆</div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Terminé!</h2>
      
      <p className="text-gray-500 mb-6 text-center">{message}</p>

      
      <div className="bg-purple-100 p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center mb-8 border-4 border-purple-500">
        <span className="text-4xl font-black text-purple-700">{score}</span>
        <span className="text-gray-500 text-sm">sur {totalQuestions}</span>
      </div>

      
      <button 
        onClick={onReset}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg"
      >
        Rejouer 🔄
      </button>
      
    </div>
  );
}

export default ResultScreen;
