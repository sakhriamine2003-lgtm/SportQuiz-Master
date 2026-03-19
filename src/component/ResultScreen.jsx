import React from 'react';

// 1. Props: 'questions' w 'userAnswers'  --> US11
function ResultScreen({ score, total, questions, userAnswers, onReset }) {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md">
      
      {/* SECTION US10 (Score BARE) */}
      <div className="text-center border-b pb-4 mb-6 font-bold">
        <h2 className="text-2xl italic">Score Final: {score} / {total}</h2>
        <button onClick={onReset} className="bg-purple-600 text-white p-2 rounded-lg mt-2">🔄 Rejouer</button>
      </div>

      {/* US11: LISTE Des fautes--- */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-700">Détails de vos réponses:</h3>

        {/* boucle map:  chaque question --> ZDTHA US11 */}
        {questions.map((q, index) => {
          
          // comparaison: question correcte? -->  US11
          const isCorrect = userAnswers[index] === q.correctAnswer;

          return (
            <div key={index} className={`p-4 rounded-lg border-2 ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
              
              {/* l-affichage de question  -->  US11 */}
              <p className="font-semibold text-gray-800">{index + 1}. {q.text}</p>
              
              <div className="mt-2 text-sm">
                {/* D. Zdna l-affichage choix d user(en rouge en cas de faux) -->  US11 */}
                <p>
                  <span className="text-gray-500 font-bold">Ta réponse: </span>
                  <span className={isCorrect ? 'text-green-600' : 'text-red-600 font-bold'}>
                    {userAnswers[index] || "Ma-jawbtich"} {isCorrect ? '✅' : '❌'}
                  </span>
                </p>
                
                {/* correction et corriger -->  US11 */}
                {!isCorrect && (
                  <p className="mt-1 text-green-700 font-medium">
                    <span className="text-gray-500 font-bold">Réponse correcte: </span>
                    {q.correctAnswer}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* --- US11 --- */}

    </div>
  );
}

export default ResultScreen;