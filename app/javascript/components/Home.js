import React from "react";
import startClickTopImage from "../images/start-click-top.webp"; // 画像のパスを指定

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="mb-2 text-center">
        <img src={startClickTopImage} alt="スタートクリックトップ" /> {/* 画像を表示 */}
        <p className="">スタートを押すと<span className="text-red-600 font-bold">+1点</span></p>
        <p className="">それ以外を押すと<span className=" text-blue-600 font-bold">-1点</span></p>
        <a href="/games" className="text-blue-600 hover:text-blue-800 font-bold underline">
          開始
        </a>
      </div>
    </React.Fragment>
  )
}

export default Home;
