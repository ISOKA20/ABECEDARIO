import React, { useState } from 'react';
import Letter from './Letter';
import './LetterSelectionGame.css';

const LetterSelectionGame = () => {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [correctLetter, setCorrectLetter] = useState(
    String.fromCharCode(65 + Math.floor(Math.random() * 26))
  );

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    if (letter === correctLetter) {
      setCorrectLetter(
        String.fromCharCode(65 + Math.floor(Math.random() * 26))
      );
    }
  };

  return (
    <div className="letter-selection-game">
      <h2>Selecciona la letra: {correctLetter}</h2>
      <div className="letters">
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
          <Letter key={letter} letter={letter} onClick={handleLetterClick} />
        ))}
      </div>
      {selectedLetter && (
        <div className={`result ${selectedLetter === correctLetter ? 'correct' : 'incorrect'}`}>
          {selectedLetter === correctLetter
            ? '¡Correcto!'
            : 'Inténtalo de nuevo'}
        </div>
      )}
    </div>
  );
};

export default LetterSelectionGame;
