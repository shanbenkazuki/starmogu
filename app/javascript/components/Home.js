import React from "react";
import startClickTopImage from "../images/start-click-top.webp";
import { UIProvider } from "@yamada-ui/react"
import { Button } from "@yamada-ui/react"
import { Link } from "@yamada-ui/react"
import axios from 'axios';

const levels = [
  { path: "/games/low", label: "初級" },
  { path: "/games/high", label: "上級" },
];

const Home = (props) => {
  const isLogin = props.isLogin
  const username = props.username
  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      window.location.href = '/';
    } catch (error) {
      // エラー処理
      console.log(error)
    }
  };
  return (
    <React.Fragment>
      <UIProvider>
        <div className="mb-2 text-center">
          <img src={startClickTopImage} alt="スタートクリックトップ" />
          <p className="">スタートを押すと<span className="text-red-600 font-bold">+1点</span></p>
          <p className="">それ以外を押すと<span className=" text-blue-600 font-bold">-1点</span></p>
          {levels.map((level) => (
            <Link href={level.path} key={level.path} className="font-bold mr-2">
              {level.label}
            </Link>
          ))}
        </div>
        <div className="mb-2 text-center">
          {isLogin ? (
            <p className="font-bold">ログインしています。{username}さん
            <Button onClick={handleLogout} className="mr-2" size="sm">
              ログアウト
            </Button>
            </p>
          ) : (
            <React.Fragment>
              <p className="font-bold">ログインしていません。</p>
              <Button onClick={() => window.open("/login", '_self')} className="font-bold mr-2">
                ログイン
              </Button>
              <Button onClick={() => window.open("/users/new", '_self')} className="font-bold mr-2">
                新規登録
              </Button>
            </React.Fragment>
            
          )}
        </div>
        <div className="mb-2 text-center">
          <Button onClick={() => window.open("/ranking", '_self')} className="font-bold mr-2">
            ランキング
          </Button>
        </div>
      </UIProvider>
    </React.Fragment>
  );
}

export default Home;
