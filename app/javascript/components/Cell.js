import React from 'react';
import Button from './Button';

const Cell = ({ isStart, isDecoy, onStartClick, onDecoyClick }) => {
  return (
    <div className="w-32 h-32 border border-gray-400 flex justify-center items-center">
      {isStart && (
        <Button
          label="スタート"
          onClick={onStartClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
        />
      )}
      {isDecoy && (
        <Button
          label="スタード"
          onClick={onDecoyClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold"
        />
      )}
    </div>
  );
};

export default Cell;
