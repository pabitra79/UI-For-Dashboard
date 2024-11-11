import React from "react";
import icon from "../assets/download.png";

const TopNav = () => {
  return (
    <div className="topNav bg-gray-900 ">
      <header className="flex justify-between items-center py-4 px-8 ">
        <div className="flex items-center gap-2  ml-4 ">
          <img
            src={icon}
            alt="lcon of navbar"
            className="w-6 h-6 bg-black rounded-md"
          />
          <h1 className="text-2xl text-white font-bold ">Envato Market</h1>
        </div>
        <div className=" grid grid-col items-center justify-end mr-6 px-6 py-1 ">
          <button className="bg-green-500 hover:bg-gray-700 text-white font-bold rounded-md p-1  ">
            Buy Now
          </button>
        </div>
      </header>
    </div>
  );
};

export default TopNav;
