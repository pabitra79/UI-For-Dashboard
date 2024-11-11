import React from "react";
import rb from "../assets/rightbottom.jfif";
import ws from "../assets/ws1.png";
import pause from "../assets/pause.webp";
import upload from "../assets/upload.jfif";
import progres from "../assets/progresbar.jpg";

const BottonRight = () => {
  return (
    <div className="bottomright grid grid-rows-2 gap-4 bg-black">
      <div className="bottomrighttop bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg p-4">
        <h1 className="text-white font-mono text-lg mb-4">Weekly Statistics</h1>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src={ws} className="h-14 w-16 rounded-full" />
              <h1 className="text-white font-bold text-lg">1.7 K</h1>
            </div>
            <h2 className="text-white text-lg ml-16 ">Customers</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src={ws} className="h-14 w-16 rounded-full" />
              <h1 className="text-white font-bold text-lg">3.9 K</h1>
            </div>
            <h2 className="text-white text-lg ml-16 ">Orders</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <img src={ws} className="h-14 w-16 rounded-full" />
              <h1 className="text-white font-bold text-lg">7.9 K</h1>
            </div>
            <h2 className="text-white text-lg ml-16 ">Revenue</h2>
          </div>
        </div>
      </div>
      <div className="bottomrightbottom grid grid-cols-1 gap-4 bg-black sm:grid-cols-2">
        <div className="bottomrightbottombox1 min-h-[140px]h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg">
          <div className="flex flex-col">
            <div className="flex justify-end items-center pr-4">
              <img src={pause} className="w-12  h-12  mt-3 rounded-full" />
            </div>
          </div>
          <h1 className="px-16 mt-4 text-white">45%Uploading... 100GB</h1>
          <div className="flex ">
            <div className="flex items-center mt-4">
              <img src={upload} className="h-16 w-16 rounded-full mx-3" />
              <img src={progres} className="w-26 h-16 rounded-full mt-3" />
            </div>
          </div>
        </div>
        <div className="bottomrightbottombox2  flex min-h-[140px] bg-gradient-to-r from-amber-200 to-yellow-500 rounded-lg">
          <div className="relative items-starts justify-center ml-12 mt-12 ">
            <img src={rb} alt="" className="h-10 w-14 rounded-full" />
          </div>
          <div className="">
            <h2 className=" font-bold text-white mt-10 ml-6 ">
              Upgrade your plan and get complete access.
            </h2>
            <div className="bg-red-400  justify-self-end py-2 px-6  mr-4  rounded-xl mt-8">
              Upgrade Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottonRight;
