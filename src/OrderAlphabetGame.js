import React, { useState } from 'react';
import './OrderAlphabetGame.css';

const OrderAlphabetGame = () => {
  const [shuffledLetters, setShuffledLetters] = useState(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').sort(() => Math.random() - 0.5)
  );
  const [orderedLetters, setOrderedLetters] = useState([]);

  const handleLetterClick = (letter) => {
    setOrderedLetters([...orderedLetters, letter]);
    setShuffledLetters(shuffledLetters.filter((l) => l !== letter));
  };

  const handleReset = () => {
    setOrderedLetters([]);
    setShuffledLetters('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').sort(() => Math.random() - 0.5));
  };

  return (
    <div className="order-alphabet-game">
      <h2>Ordena el Abecedario</h2>
      <div className="ordered-letters">
        {orderedLetters.join(' ')}
      </div>
      <div className="letters">
        {shuffledLetters.map((letter) => (
          <button key={letter} onClick={() => handleLetterClick(letter)}>{letter}</button>
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>Reiniciar</button>
    </div>
  );
};

export default OrderAlphabetGame;
