import React from 'react';
import Letter from './Letter';
import './Alphabet.css';

const Alphabet = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="alphabet">
      {letters.map((letter, index) => (
        <Letter key={index} letter={letter} />
      ))}
    </div>
  );
};

export default Alphabet;