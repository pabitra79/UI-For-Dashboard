import React from "react";
// import { PieChart } from "@mui/x-charts/PieChart";
// import { mobileAndDesktopOS, valueFormatter } from "./webUsageStats";
import righttop from "../assets/righttop.jfif";
import user from "../assets/user3.jpg";
import next from "../assets/next.png";
import { PieChart } from "@mui/x-charts/PieChart";
// import { mobileAndDesktopOS, valueFormatter } from "./webUsageStats";

const BottomLeft = () => {
  return (
    <div className="bottomleft grid grid-cols-1 gap-4 bg-black sm:grid-cols-2">
      <div className="bottomletfbox1 min-h[350px] bg-gradient-to-r from-teal-400 to-yellow-200 rounded-xl">
        <h1 className="font-bold  text-gray-800 mt-3 ml-6">Admin & Members</h1>
        <div className="flex gap-4 shadow-md  w-full h-32  hover:bg-blue-300 rounded-lg">
          <div className="gap-4">
            <img src={user} className="h-14 w-13 mt-10 ml-14 rounded-full" />
          </div>
          <div className="items-center justify-center mt-10 ">
            <h1 className="text-lg font-bold ">Fiona Stone</h1>
            <h2 className="text-sm  ">Admin</h2>
          </div>
          <img src={next} className="h-8 w-7 mt-12" />
        </div>
        <div className="flex gap-4 shadow-md  w-full h-32  hover:bg-blue-300 rounded-lg">
          <div className="">
            <img
              src={righttop}
              className="h-14 w-13 mt-10 ml-14 rounded-full"
            />
          </div>
          <div className="items-center justify-center mt-10">
            <h1 className="text-lg font-bold ">Gale Hunt</h1>
            <h2 className="text-sm  ">Member</h2>
          </div>
          <img src={next} className="h-8 w-7 mt-12" />
        </div>
      </div>

      <div className="bottomletfbox2 min-h[350px] bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl">
        <h2 className="text-white font-mono mt-2 ml-2">Monthly Order</h2>
        <PieChart
          className="text-white flex flex-col"
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Desktop" },
                { id: 1, value: 15, label: "Mobile" },
                { id: 2, value: 20, label: "Tab" },
              ],
            },
          ]}
          width={330}
          height={350}
        />
      </div>
    </div>
  );
};

export default BottomLeft;
