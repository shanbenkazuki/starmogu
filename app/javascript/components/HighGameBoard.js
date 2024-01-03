import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Cell from './HighCell';

const GameBoard = (props) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [decoyCells, setDecoyCells] = useState([]); // デコイセルの状態を追加
  const [score, setScore] = useState(0);
  const initialTime = 25;

  useEffect(() => {
    showRandomWord();
  }, []);

  const showRandomWord = () => {
    setSelectedCell(null);
    setDecoyCells([]);
    setTimeout(() => {
      const randomCell = Math.floor(Math.random() * 9);
      let decoyCellsArray = [];
      while (decoyCellsArray.length < 8) {
        let decoyRandomCell = Math.floor(Math.random() * 9);
        if (decoyRandomCell !== randomCell && !decoyCellsArray.includes(decoyRandomCell)) {
          decoyCellsArray.push(decoyRandomCell);
        }
      }
      setSelectedCell(randomCell);
      setDecoyCells(decoyCellsArray);
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
        isDecoy={decoyCells.includes(index)}
        onStartClick={handleStartClick}
        onDecoyClick={handleDecoyClick}
      />
    );
  };

  const handleTimeUp = () => {
    alert(`タイムアップ！あなたのスコアは ${score} 点です。`);
    setSelectedCell(null);
    setDecoyCells([]);
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
