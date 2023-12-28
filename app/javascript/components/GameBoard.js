import React, { useState, useEffect } from 'react';

const GameBoard = (props) => {
  const [word, setWord] = useState(''); // 表示する単語のステート

  useEffect(() => {
    // コンポーネントがマウントされたら、スタートの文字を表示
    showRandomWord();
  }, []);

  const showRandomWord = () => {
    // ランダムにスタートの文字を表示するロジック
    setWord('スタート');
    // ここでは単純化のため、常に「スタート」と表示しますが、
    // 実際にはランダムな位置やタイミングで表示させることが可能です。
  };

  const handleWordClick = () => {
    // 文字がクリックされたときの処理
    console.log('スタートがクリックされました！');
    // スコアの更新や他のアクションをここで行います。
  };

  return (
    <React.Fragment>
      こんにちは、これはゲームボードです。
      {word && <div onClick={handleWordClick}>{word}</div>}
    </React.Fragment>
  );
};

export default GameBoard;
