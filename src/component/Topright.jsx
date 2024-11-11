import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
// import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import righttop from "../assets/righttop.jfif";
import user from "../assets/user.png";

const Topright = () => {
  const chartConfigbar = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  const chartConfig = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  return (
    <div className="Topright grid grid-cols-1 gap-4 bg-black sm:grid-cols-2">
      <div className="Toprightleft grid grid-rows-2 gap-4  bg-black ">
        <div className="topRightLeftBox1 min-h-[200px] bg-gradient-to-r from-teal-200 to-teal-500 rounded-xl ">
          <div>
            <Typography variant="h6" color="blue-gray">
              Weekley Sales
            </Typography>
          </div>

          <Chart {...chartConfigbar} />
        </div>
        <div className="Toprightleftbox2 min-h-[200px]  bg-gradient-to-r from-red-500 to-orange-500 rounded-xl text-white">
          {/* <CardBody className="px-2 pb-0"> */}
          <Chart {...chartConfig} />
          {/* </CardBody> */}
        </div>
      </div>
      <div className="Toprightright min-h-[300px] bg-fuchsia-400 rounded-xl relative">
        <h1 className="font-bold text-white mt-2 ml-6">Actitvity</h1>

        <div className="flex gap-8">
          <div className="top-0 left-0 right-0 ">
            <img
              src={righttop}
              className="h-12 w-12 mt-10 ml-14 rounded-full"
            />
          </div>
          <div className="items-center justify-center mt-9">
            <h1 className="text-lg font-bold ">Fiona Stone</h1>
            <h2 className="text-sm  ">3 hours ago</h2>
            <h2 className="text-sm  ">Sent invoice ref.#23457</h2>
            <button className="bg-green-500 hover:bg-gray-700 text-white font-bold rounded-md p-1 ml-8 mt-2">
              send
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="top-0 left-0 right-0 ">
            <img src={user} className="h-12 w-12 mt-10 ml-14 rounded-full" />
          </div>
          <div className="items-center justify-center mt-9">
            <h1 className="text-lg font-bold ">Fiona Stone</h1>
            <h2 className="text-sm  ">3 hours ago</h2>
            <h2 className="text-sm  ">Sent invoice ref.#23457</h2>
            <button className="bg-green-500 hover:bg-gray-700 text-white font-bold rounded-md p-1 ml-8 mt-2">
              send
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="top-0 left-0 right-0 ">
            <img
              src={righttop}
              className="h-12 w-12 mt-10 ml-14 rounded-full"
            />
          </div>
          <div className="items-center justify-center mt-9">
            <h1 className="text-lg font-bold ">Fiona Stone</h1>
            <h2 className="text-sm  ">3 hours ago</h2>
            <h2 className="text-sm  ">Sent invoice ref.#23457</h2>
            <button className="bg-green-500 hover:bg-gray-700 text-white font-bold rounded-md p-1 ml-8 mt-2">
              send
            </button>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="top-0 left-0 right-0 ">
            <img
              src={righttop}
              className="h-12 w-12 mt-10 ml-14 rounded-full"
            />
          </div>
          <div className="items-center justify-center mt-9">
            <h1 className="text-lg font-bold ">Fiona Stone</h1>
            <h2 className="text-sm  ">3 hours ago</h2>
            <h2 className="text-sm  ">Sent invoice ref.#23457</h2>
            <button className="bg-green-500 hover:bg-gray-700 text-white font-bold rounded-md p-1 ml-8 mt-2">
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topright;
