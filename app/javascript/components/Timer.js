import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // タイマーが0になったら終了
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    // 1秒ごとにカウントダウン
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // クリーンアップ関数
    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <div>
      残り時間: {timeLeft}秒
    </div>
  );
};

export default Timer;
