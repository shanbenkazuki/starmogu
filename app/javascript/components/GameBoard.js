import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Cell from './Cell';

const GameBoard = (props) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [decoyCell, setDecoyCell] = useState(null);
  const [score, setScore] = useState(0);
  const initialTime = 15;

  useEffect(() => {
    showRandomWord();
  }, []);

  const showRandomWord = () => {
    setSelectedCell(null);
    setDecoyCell(null);
    setTimeout(() => {
      const randomCell = Math.floor(Math.random() * 9);
      let decoyRandomCell;
      do {
        decoyRandomCell = Math.floor(Math.random() * 9);
      } while (decoyRandomCell === randomCell);
      setSelectedCell(randomCell);
      setDecoyCell(decoyRandomCell);
    }, 10);
  };

  const handleStartClick = () => {
    setScore(score + 1);
    showRandomWord();
  };

  const handleDecoyClick = () => {
    setScore(score - 1);
    showRandomWord();
  };

  const renderCell = (index) => {
    return (
      <Cell
        key={index}
        isStart={index === selectedCell}
        isDecoy={index === decoyCell}
        onStartClick={handleStartClick}
        onDecoyClick={handleDecoyClick}
      />
    );
  };

  const handleTimeUp = () => {
    alert(`タイムアップ！あなたのスコアは ${score} 点です。`);
    setSelectedCell(null);
    setDecoyCell(null);
  };

  return (
    <React.Fragment>
      <a href="/" className="text-blue-600 hover:text-blue-800 font-bold underline">Homeに戻る</a>
      <Timer initialTime={initialTime} onTimeUp={handleTimeUp} />
      <div className="text-xl font-semibold mb-4">スコア: {score}</div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }, (_, index) => renderCell(index))}
      </div>
    </React.Fragment>
  );
};

export default GameBoard;
