import React, { useRef, useState } from 'react';
import './DrawTheLetterGame.css';

const DrawTheLetterGame = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [letter, setLetter] = useState(String.fromCharCode(65 + Math.floor(Math.random() * 26)));

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.closePath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const changeLetter = () => {
    setLetter(String.fromCharCode(65 + Math.floor(Math.random() * 26)));
    clearCanvas();
  };

  return (
    <div className="draw-the-letter-game">
      <h2>Dibuja la Letra: {letter}</h2>
      <canvas
        ref={canvasRef}
        width="400"
        height="400"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <div className="controls">
        <button onClick={clearCanvas}>Borrar</button>
        <button onClick={changeLetter}>Cambiar Letra</button>
      </div>
    </div>
  );
};

export default DrawTheLetterGame;
