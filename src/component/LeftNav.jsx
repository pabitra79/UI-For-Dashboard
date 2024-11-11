import React, { Fragment, useState } from "react";
import logo from "../assets/logo.png";
import home from "../assets/home.png";
import product from "../assets/Product.jfif";
import next from "../assets/next.png";
import LeftNavItem from "./LeftNavItem";
const LeftNav = () => {
  const [isSubCategory, setIsSubCategory] = useState(false);
  const sideArr = [
    {
      title: "Dashoard",
      icon: home,
      subtitle: [
        {
          title: "Item 1",
        },
        {
          title: "Item 2",
        },
        {
          title: "Item 3",
        },
      ],
    },
    {
      title: "Product",
      icon: product,
      subtitle: [
        {
          title: "Item 1",
        },
        {
          title: "Item 2",
        },
        {
          title: "Item 3",
        },
      ],
    },
    {
      title: "UI Element",
      icon: product,
      subtitle: [
        {
          title: "Item 1",
        },
        {
          title: "Item 2",
        },
        {
          title: "Item 3",
        },
      ],
    },
    {
      title: "Pages",
      icon: product,
      subtitle: [
        {
          title: "Item 1",
        },
        {
          title: "Item 2",
        },
        {
          title: "Item 3",
        },
      ],
    },
  ];

  return (
    <div className="leftNav hidden bg-gray-800 md:flex mt-2 gap-10 flex-col p-2 rounded-md">
      <div className="item-center justify-center p-4 ">
        <img src={logo} alt="dashboard logo" className="w-full h-16" />
      </div>

      {sideArr.map((item, index) => {
        return <LeftNavItem index={index} item={item} />;
      })}
    </div>
  );
};

export default LeftNav;
