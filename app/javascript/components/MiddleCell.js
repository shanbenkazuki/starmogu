import React from 'react';
import Button from './Button';

const decoyButtons = [
  { label: "スタード", className: "bg-red-500 hover:bg-red-700" },
  { label: "ヌタート", className: "bg-green-500 hover:bg-green-700" },
  { label: "スダート", className: "bg-yellow-500 hover:bg-yellow-700" },
  { label: "スクート", className: "bg-purple-500 hover:bg-purple-700" },
  { label: "ヅタート", className: "bg-orange-500 hover:bg-orange-700" },
];

// スタートボタンの色の定義
const startButtonColors = [
  "bg-blue-500 hover:bg-blue-700",
  "bg-indigo-500 hover:bg-indigo-700",
  "bg-teal-500 hover:bg-teal-700",
  "bg-pink-500 hover:bg-pink-700",
  "bg-lime-500 hover:bg-lime-700",
];

const Cell = ({ isStart, isDecoy, onStartClick, onDecoyClick }) => {
  // デコイボタンとスタートボタンの色をランダムに選択
  const decoyButton = decoyButtons[Math.floor(Math.random() * decoyButtons.length)];
  const startButtonColor = startButtonColors[Math.floor(Math.random() * startButtonColors.length)];

  return (
    <div className="w-32 h-32 border border-gray-400 flex justify-center items-center">
      {isStart && (
        <Button
          label="スタート"
          onClick={onStartClick}
          className={`${startButtonColor} text-white font-bold`}
        />
      )}
      {isDecoy && (
        <Button
          label={decoyButton.label}
          onClick={onDecoyClick}
          className={`${decoyButton.className} text-white font-bold`}
        />
      )}
    </div>
  );
};

export default Cell;