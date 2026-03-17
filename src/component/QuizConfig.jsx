import { useState } from "react";
const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);

const handleFiftyFifty = () => {
    if (usedFiftyFifty) return;
    const incorrectOnes = currentQuestion.options.filter(opt => opt !== currentQuestion.correct);
    setHiddenOptions([incorrectOnes[0], incorrectOnes[1]]);
    setUsedFiftyFifty(true);
};