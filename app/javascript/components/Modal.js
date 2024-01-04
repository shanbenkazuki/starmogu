import React from 'react';

const Modal = ({ isOpen, onClose, score, level }) => {
  if (!isOpen) return null;

  // Twitter シェア用URLの生成
  const levelText = ["初級", "中級", "上級"][level];
  const tweetText = `私の${levelText}のスコアは ${score} 点です！`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  // levelが０なら初級、１なら中級、２なら上級

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">タイムアップ！</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              あなたの{levelText}のスコアは {score} 点です。
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 px-4 py-3">
            {/* Twitter シェアボタン */}
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Twitterでシェアする
            </a>
            {/* 閉じるボタン */}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
