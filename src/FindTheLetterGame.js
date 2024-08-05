import React, { useState } from 'react';
import Letter from './Letter';
import './FindTheLetterGame.css';

const FindTheLetterGame = () => {
  const [correctLetter, setCorrectLetter] = useState(
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  );
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleLetterClick = (letter) => {
    if (letter === correctLetter) {
      alert('¡Correcto!');
      setCorrectLetter(String.fromCharCode(65 + Math.floor(Math.random() * 26)));
    } else {
      alert('Inténtalo de nuevo');
    }
  };

  return (
    <div className="find-the-letter-game">
      <h2>Encuentra la Letra: {correctLetter}</h2>
      <div className="letters">
        {letters.map((letter) => (
          <Letter key={letter} letter={letter} onClick={() => handleLetterClick(letter)} />
        ))}
      </div>
    </div>
  );
};

export default FindTheLetterGame;
