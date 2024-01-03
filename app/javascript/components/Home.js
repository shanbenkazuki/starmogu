import React from "react";
import startClickTopImage from "../images/start-click-top.webp"; // 画像のパスを指定

const levels = [
  { path: "/games/low", label: "初級" },
  { path: "/games/middle", label: "中級" },
  { path: "/games/high", label: "上級" },
];

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="mb-2 text-center">
        <img src={startClickTopImage} alt="スタートクリックトップ" /> {/* 画像を表示 */}
        <p className="">スタートを押すと<span className="text-red-600 font-bold">+1点</span></p>
        <p className="">それ以外を押すと<span className=" text-blue-600 font-bold">-1点</span></p>
        {levels.map((level) => (
          <a
            key={level.path}
            href={level.path}
            className="text-blue-600 hover:text-blue-800 font-bold underline mr-2"
          >
            {level.label}
          </a>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Home;
