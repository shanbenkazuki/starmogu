import React, { useState, useEffect } from 'react';
import Timer from './Timer';

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
      <div className="w-32 h-32 border border-gray-400 flex justify-center items-center">
        {index === selectedCell && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-500 hover:scale-105"
            onClick={handleStartClick}
            style={{ animation: 'popIn 0.5s ease-out' }}
          >
            スタート
          </button>
        )}
        {index === decoyCell && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transform transition duration-500 hover:scale-105"
            onClick={handleDecoyClick}
            style={{ animation: 'popIn 0.5s ease-out' }}
          >
            スタード
          </button>
        )}
      </div>
    );
  };

  const handleTimeUp = () => {
    alert(`タイムアップ！あなたのスコアは ${score} 点です。`);
    setSelectedCell(null);
    setDecoyCell(null);
  };

  return (
    <React.Fragment>
      <Timer initialTime={initialTime} onTimeUp={handleTimeUp} />
      <div className="text-xl font-semibold mb-4">スコア: {score}</div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }, (_, index) => renderCell(index))}
      </div>
    </React.Fragment>
  );
};

export default GameBoard;
