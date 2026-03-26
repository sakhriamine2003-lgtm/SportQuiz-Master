// src/utils/shuffleAnswers.js

// Named export function to shuffle an array
export function shuffleAnswers(array) {
  // Make a copy of the array so the original isn't mutated
  const shuffled = [...array];

  // Fisher-Yates shuffle (better than sort(() => Math.random() - 0.5))
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}