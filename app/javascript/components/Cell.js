import React from 'react';
import { UIProvider } from "@yamada-ui/react"
import { Button } from "@yamada-ui/react"

// デコイボタンの設定を統合
const decoyButtonConfigs = [
  // 初級の設定
  [
    { label: "スタード", colorScheme: "primary" },
  ],
  // 中級の設定
  [
    { label: "スタード", colorScheme: "primary" },
    { label: "ヌタート", colorScheme: "secondary" },
    { label: "スダート", colorScheme: "success" },
    { label: "スクート", colorScheme: "warning" },
  ],
  // 上級の設定
  [
    { label: "スタード", colorScheme: "primary" },
    { label: "ヌタート", colorScheme: "secondary" },
    { label: "スダート", colorScheme: "success" },
    { label: "スクート", colorScheme: "warning" },
    { label: "ズタート", colorScheme: "danger" },
    { label: "スカート", colorScheme: "gray" },
    { label: "スナート", colorScheme: "pink" },
    { label: "スマート", colorScheme: "yellow" },
  ],
];

const startButtonColors = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "gray",
  "pink",
  "yellow",
  "fuchsia",
];

const Cell = ({ level, isStart, isDecoy, onStartClick, onDecoyClick }) => {
  const decoyButtons = decoyButtonConfigs[level];
  const decoyButton = isDecoy ? decoyButtons[Math.floor(Math.random() * decoyButtons.length)] : null;
  const startButtonColor = startButtonColors[Math.floor(Math.random() * startButtonColors.length)];

  return (
    <UIProvider>
      <div className="w-32 h-32 border border-gray-400 flex justify-center items-center">
        {isStart && (
          <Button
          onPointerDown={onStartClick}
          colorScheme={startButtonColor}
          style={{ animation: 'popIn 0.5s ease-out' }}
        >
          スタート
        </Button>
          )}
        {isDecoy && decoyButton && (
          <Button
          onPointerDown={onDecoyClick}
          colorScheme={decoyButton.colorScheme}
          style={{ animation: 'popIn 0.5s ease-out' }}
        >
          {decoyButton.label}
        </Button>
          )}
      </div>
    </UIProvider>
  );
};

export default Cell;
