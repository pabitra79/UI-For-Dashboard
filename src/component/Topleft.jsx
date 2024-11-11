import React from "react";
import group from "../assets/group.jfif";
import inflation from "../assets/inflation1.png";
import product1 from "../assets/2nd.jpg";
import product from "../assets/product.jfif";
import order from "../assets/order.png";
import signup from "../assets/signup.png";
import block from "../assets/blocks2.svg";
import { FaDownload } from "react-icons/fa";

const Topleft = () => {
  return (
    <div className="Topleft grid grid-rows-2 gap-4 bg-black  ">
      <div className="topleftTop grid grid-cols-1 gap-4 bg-black sm:grid-cols-2 lg:grid-cols-2">
        <div className="topleftbox1 min-h-[140px] bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <img className="h-10 w-10" src={group} alt="Customer Icon" />
            </div>
            <div>
              <p className="text-sm font-medium">Customer</p>
              <p className="text-3xl font-bold">250</p>
              <p className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-lg inline-block mt-2">
                +5.8%
              </p>
            </div>
          </div>
          <img
            src={inflation}
            className="h-10 w-10  opacity-70 backdrop-blur-[2px] rounded-full "
          />
        </div>
        <div className="topleftbox2 min-h-[140px] bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-lg text-white p-6 shoadow-lg flex items center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <img className="h-10 w-10" src={product} alt="Customer Icon" />
            </div>
            <div>
              <p className="text-sm font-medium">Product</p>
              <p className="text-3xl font-bold">185</p>
              <p className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-lg inline-block mt-2">
                +4.9%
              </p>
            </div>
          </div>
          <img
            src={product1}
            className="h-10 w-10  opacity-70  backdrop-blur-{ 2xl} backdrop-brightness-200 rounded-full"
          />
        </div>
        <div className="topleftbox3 min-h-[140px] bg-gradient-to-r from-lime-400 to-lime-500 rounded-lg  text-white p-6 shoadow-lg flex items center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <img className="h-10 w-10 " src={order} alt="Customer Icon" />
            </div>
            <div>
              <p className="text-sm font-medium">Order</p>
              <p className="text-3xl font-bold">600</p>
              <p className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-lg inline-block mt-2">
                +8.2%
              </p>
            </div>
          </div>
          <img src={product1} className="h-10 w-10  opacity-70  rounded-full" />
        </div>
        <div className="topleftbox4 min-h-[140px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg  text-white p-6 shoadow-lg flex items center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <img className="h-10 w-10" src={signup} alt="Customer Icon" />
            </div>
            <div>
              <p className="text-sm font-medium">SignUp</p>
              <p className="text-3xl font-bold">350</p>
              <p className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-lg inline-block mt-2">
                +3.7%
              </p>
            </div>
          </div>
          <img src={product1} className="h-10 w-10  opacity-70 rounded-full " />
        </div>
      </div>
      <div className="topleftBottom min-h-[300px] bg-gradient-to-r from-teal-400 to-yellow-200 rounded-xl  text-gray-600 p-6 shoadow-lg flex items center justify-between">
        <div className="items-center justify-center p-12 px-24">
          <h3 className="text-lg font-bold">Get the latest tech news &</h3>

          <h3 className="text-lg font-bold">updates</h3>
        </div>
        <div className="flex items-center justify-center">
          <button className="flex items-center px-4 py-2 space-x-2 bg-white rounded-full shadow-md hover:shadow-lg focus:outline-none">
            <FaDownload className="text-red-500 h-6 w-6" />
            <span className="text-red-500 font-semibold">Download an App</span>
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src={block} alt="blocks" className="h-64 w-64" />
        </div>
      </div>
    </div>
  );
};
export default Topleft;
