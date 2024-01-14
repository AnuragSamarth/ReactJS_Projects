import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-600 p-2.5">
      <h1 className="text-center text-4xl text-white">
        React Router Dom v-6.21.2
      </h1>
      <div className="flex justify-between">
        <Link to={"/"}>
          <span className="text-center text-4xl text-white cursor-pointer">
            Home
          </span>
        </Link>

        <Link to={"/about"}>
          <span className="text-center text-4xl text-white cursor-pointer">
            About
          </span>
        </Link>

        <Link to={"/chat"}>
          <span className="text-center text-4xl text-white cursor-pointer">
            Chat
          </span>
        </Link>

        <Link to={"*"}>
          <span className="text-center text-4xl text-white cursor-pointer">
            Error
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
