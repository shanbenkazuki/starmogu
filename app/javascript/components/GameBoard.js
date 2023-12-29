import React, { useState, useEffect } from 'react';
import Timer from './Timer';

const GameBoard = (props) => {
  const [word, setWord] = useState('');
  const [score, setScore] = useState(0); // スコアのステートを追加
  const initialTime = 30; // タイマーの初期時間（例: 30秒）

  // タイムアップ時の処理
  const handleTimeUp = () => {
    alert('タイムアップ！');
  };

  useEffect(() => {
    showRandomWord();
  }, []);

  const showRandomWord = () => {
    setWord('スタート');
  };

  const handleWordClick = () => {
    console.log('スタートがクリックされました！');
    setScore(score + 1); // スコアを加算
  };

  return (
    <React.Fragment>
      <Timer initialTime={initialTime} onTimeUp={handleTimeUp} />
      <div>スコア: {score}</div> {/* スコアの表示 */}
      ----------------------------------------
      {word && <div onClick={handleWordClick}>{word}</div>}
    </React.Fragment>
  );
};

export default GameBoard;
