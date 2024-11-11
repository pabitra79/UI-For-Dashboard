import React from "react";
import Topbar from "./Topbar";
import Topleft from "./Topleft";
import Topright from "./Topright";
import BottomLeft from "./BottomLeft";
import BottonRight from "./BottonRight";

const Maincontent = () => {
  return (
    <div className="Maincontent grid grid-rows-[56px_1fr] gap-4 bg-black">
      <Topbar />
      <div className="contentbody flex flex-col gap-4 bg-black">
        <div className="top grid grid-col-1 gap-4 bg-black lg:grid-cols-2">
          <Topleft />
          <Topright />
        </div>
        <div className="bottom grid grid-cols-1 gap-4 bg-black lg:grid-cols-2">
          <BottomLeft />
          <BottonRight />
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
