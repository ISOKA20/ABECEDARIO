import React from 'react';
import { BrowserRouter as Router, Route, Routes , Link } from 'react-router-dom';
import './App.css';
import LetterSelectionGame from './LetterSelectionGame';
import MemoryGame from './MemoryGame';
import FindTheLetterGame from './FindTheLetterGame';
import OrderAlphabetGame from './OrderAlphabetGame';
import DrawTheLetterGame from './DrawTheLetterGame';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Aprender el Abecedario con Juegos</h1>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/letter-selection">Selecciona la Letra</Link></li>
              <li><Link to="/memory-game">Juego de Memoria</Link></li>
              <li><Link to="/find-the-letter">Encuentra la Letra</Link></li>
              <li><Link to="/order-alphabet">Ordena el Abecedario</Link></li>
              <li><Link to="/draw-the-letter">Dibuja la Letra</Link></li>
            </ul>
          </nav>
        </header>
        <Routes >
          <Route path="/" exact element={<Home/>} />
          <Route path="/letter-selection" element={<LetterSelectionGame/>} />
          <Route path="/memory-game" element={<MemoryGame/>} />
          <Route path="/find-the-letter" element={<FindTheLetterGame/>} />
          <Route path="/order-alphabet" element={<OrderAlphabetGame/>} />
          <Route path="/draw-the-letter" element={<DrawTheLetterGame/>} />
        </Routes >
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home">
    <h2>Bienvenidos a la Página de Aprendizaje del Abecedario</h2>
    <p>Selecciona un juego para comenzar a aprender y divertirte:</p>
    <ul>
      <li><Link to="/letter-selection">Selecciona la Letra</Link></li>
      <li><Link to="/memory-game">Juego de Memoria</Link></li>
      <li><Link to="/find-the-letter">Encuentra la Letra</Link></li>
      <li><Link to="/order-alphabet">Ordena el Abecedario</Link></li>
      <li><Link to="/draw-the-letter">Dibuja la Letra</Link></li>
    </ul>
  </div>
);

export default App;
