import React, { Fragment, useState } from "react";
import next from "../assets/next.png";
const LeftNavItem = ({ item, index }) => {
  const [isSubCategory, setIsSubCategory] = useState(false);
  console.log(isSubCategory);
  return (
    <Fragment key={index}>
      <div
        onClick={() => {
          if (isSubCategory == false) {
            setIsSubCategory(true);
          } else {
            setIsSubCategory(false);
          }
        }}
        className="flex-col items-center justify-center shadow-md w-full h-24 hover:bg-gray-900 rounded-md space-y-2"
      >
        <div className="flex item-center justify-center gap-1 mt-2">
          <img
            src={item.icon}
            className="h-9 w-8 bg-orange-500 rounded-full p-1"
          />
          <img src={next} className="h-9 w-8" />
        </div>
        <h2 className="text-white text-bold ml-4">{item.title}</h2>
      </div>
      {isSubCategory && (
        <>
          {item.subtitle.map((childItem, childIndex) => {
            return <p>{childItem.title}</p>;
          })}
        </>
      )}
    </Fragment>
  );
};

export default LeftNavItem;
