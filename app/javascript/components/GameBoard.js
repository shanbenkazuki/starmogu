import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Cell from './Cell';
import Modal from './ScoreModal';
import axios from 'axios';

const GameBoard = (props) => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [decoyCells, setDecoyCells] = useState([]); // デコイセルの状態を追加
  const [score, setScore] = useState(0);
  const initialTime = props.initialTime;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const correctAudio = new Audio('/sounds/correct.mp3');
  const wrongAudio = new Audio('/sounds/wrong.mp3');

  useEffect(() => {
    showRandomWord();
  }, []);

  const showRandomWord = () => {
    setSelectedCell(null);
    setDecoyCells([]);
    setTimeout(() => {
      const randomCell = Math.floor(Math.random() * 9);
      let decoyCellsArray = [];
      while (decoyCellsArray.length < props.decoyCellsCount) {
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
    correctAudio.play();
    showRandomWord();
  };

  const handleDecoyClick = () => {
    setScore(score - 1);
    wrongAudio.play();
    showRandomWord();
  };

  const renderCell = (index) => {
    return (
      <Cell
        level={props.level}
        key={index}
        isStart={index === selectedCell}
        isDecoy={decoyCells.includes(index)}
        onStartClick={handleStartClick}
        onDecoyClick={handleDecoyClick}
      />
    );
  };

  const handleTimeUp = async () => {
    setScore(score);
    setSelectedCell(null);
    setDecoyCells([]);
    try {
      const response = await axios.post('/scores', { score: { score: score, level: props.level } });
      if (response.status === 200) {
      }else{
        alert("エラーが発生しました。");
      }
    } catch (error) {
      alert("エラーが発生しました。");
    }
    setIsModalOpen(true); // モーダルを開く
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <React.Fragment>
      <a href="/" className="text-blue-600 hover:text-blue-800 font-bold underline">Homeに戻る</a>
      <Timer initialTime={initialTime} onTimeUp={handleTimeUp} />
      <div className="text-xl font-semibold mb-4">スコア: {score}</div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 9 }, (_, index) => renderCell(index))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} score={score} level={props.level} />
    </React.Fragment>
  );
};

export default GameBoard;
