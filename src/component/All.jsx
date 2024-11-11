import React from "react";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import Maincontent from "./Maincontent";

const All = () => {
  return (
    <div className="root min-w-dvw grid min-h-dvh grid-rows-[56px_1fr] gap-4 bg-gray-900">
      <TopNav />
      <div className="conetent grid grid-col-1 gap-4 bg-black px-3 pb-3 md:grid-cols-[150px_1fr]">
        <LeftNav />
        <Maincontent />
      </div>
    </div>
  );
};

export default All;
