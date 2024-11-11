import React from "react";
import arrow from "../assets/arrow.png";
import home from "../assets/home1.png";
import user from "../assets/user.png";
import flag from "../assets/flag.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Topbar = () => {
  return (
    <div className="Topbar bg-black text-white  flex flex-col ">
      <nav className="flex items-center justify-between  py-4 px-8 ">
        <div className="flex items-center">
          <img src={home} className="w-6 h-6 rounded-full" alt="home icon" />
          <div className=" ml-2 gap-2  hidden md:flex items-center">
            <h1>Home</h1>
            <img
              src={arrow}
              className=" w-5 h-5 rounded-md"
              alt="arrow icon "
            />
          </div>
          <h2 className="text-bold px-2"> Daashboard</h2>
        </div>
        <div className="flex-grow justify-center hidden md:flex items-center gap-8">
          <div className="flex min-w-[8px] relative text-white bg-gray-900 rounded-md ml-64">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-1 pl-10 bg-gray-900 text-white rounded-md focus:outline-none"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"></i>
          </div>
          <div className="flex items-center justify-center space-x-12 ">
            <h1 className=" text-gray-600 text-lg ">|</h1>
            <a className="flex items-center justify-between gap-6">
              <img
                src={flag}
                alt="flag image"
                className="w-10 h-9 rounded-full"
              />
              <img />
              <i className="fa-regular fa-star"></i>
              <img />
              <i className="fa-regular fa-bell"></i>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <a className="flex items-center gap-4">
            <span className="text-ssm ">Pabitra Barik</span>
            <img
              src={user}
              alt="user name"
              className="w-10 h-9  mx-auto rounded-full"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
