import React, { useContext } from "react";
import { ThemeContext } from "../Context/Context";

const Posts = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);

  return (
    <div className=" text-center">
      <h1 className=" text-3xl p-10">My post with {theme}</h1>
      <button
        className={`w-10 h-10 ${
          theme === "dark" ? " bg-slate-400" : " bg-slate-700"
        }`}
        onClick={handleOnClick}
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Posts;

// w-10 h-10 bg-slate-400 border-black
