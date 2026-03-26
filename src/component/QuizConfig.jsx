import { useState } from "react";
const [isFiftyUsed, setIsFiftyUsed] = useState(false);;

// 2. L-lista d l-ajwiba li ghadi n-khbiw f had l-question
const [hiddenOptions, setHiddenOptions] = useState([]);





const handleFiftyFifty = () => {
  if (isFiftyUsed) return; // Ma-idir walou ila t-khdem qbel

  // A. N-jebdou ghir l-ajwiba li ghaltin
  const incorrectOnes = currentQuestion.options.filter(
    (option) => option !== currentQuestion.correctAnswer
  );

  // B. N-khtaru joj ghaltin random bach n-ghabrohom
  // N-mélangew l-ghaltin w n-akhdu l-joj l-owlin
  const toHide = incorrectOnes.sort(() => 0.5 - Math.random()).slice(0, 2);

  setHiddenOptions(toHide); // N-7etlohom f state bach n-ghabrohom
  setIsFiftyUsed(true);    // N-markiw l-bonus bli t-khdem
};

{currentQuestion.options.map((option, index) => (
  <button
    key={index}
    disabled={hiddenOptions.includes(option)} // Disable ila t-khba
    className={`p-4 rounded-xl border-2 transition-all 
      ${hiddenOptions.includes(option) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
  >
    {option}
  </button>
))}


