import React from "react";
import PropTypes from "prop-types";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="mb-2 text-center">
        <p className="">スタートを押すと<span className="text-red-600 font-bold">+1点</span></p>
        <p className="">それ以外を押すと<span className=" text-blue-600 font-bold">-1点</span></p>
      </div>
      <a href="/" className="text-blue-600 hover:text-blue-800 font-bold underline">
        開始
      </a>
    </React.Fragment>
  )
}

export default Home;
