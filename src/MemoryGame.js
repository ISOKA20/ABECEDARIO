import React, { useState, useEffect } from 'react';
import Letter from './Letter';
import './MemoryGame.css';

const MemoryGame = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [shuffledLetters, setShuffledLetters] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [matchedLetters, setMatchedLetters] = useState([]);
  const [disableAll, setDisableAll] = useState(false);

  useEffect(() => {
    const shuffled = [...letters, ...letters].sort(() => Math.random() - 0.5);
    setShuffledLetters(shuffled);
  }, []);

  const handleLetterClick = (letter, index) => {
    if (disableAll || selectedLetters.find((sel) => sel.index === index)) return;

    const newSelectedLetters = [...selectedLetters, { letter, index }];
    setSelectedLetters(newSelectedLetters);

    if (newSelectedLetters.length === 2) {
      const [first, second] = newSelectedLetters;
      if (first.letter === second.letter) {
        setMatchedLetters([...matchedLetters, first.letter]);
        setSelectedLetters([]);
      } else {
        setDisableAll(true);
        setTimeout(() => {
          setSelectedLetters([]);
          setDisableAll(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="memory-game">
      <h2>Juego de Memoria</h2>
      <div className="grid">
        {shuffledLetters.map((letter, index) => (
          <div
            key={index}
            className={`card ${selectedLetters.find((sel) => sel.index === index) || matchedLetters.includes(letter) ? 'flipped' : ''}`}
            onClick={() => handleLetterClick(letter, index)}
          >
            <div className="front"></div>
            <div className="back">
              <Letter letter={letter} onClick={() => {}} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
