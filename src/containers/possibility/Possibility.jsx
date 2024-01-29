import React from "react";
import Possibilityimg from "../../assets/possibilityimg.png";

const Possibility = () => {
  return (
    <div className="flex items-center justify-around" id="possiblitiy">
      <div className="h-[607.53px] w-[546px]">
        <img src={Possibilityimg} alt="" />
      </div>
      <div>
        <p className="text-[#71E5FF] leading-4 text-sm cursor-pointer">
          Request Early Access to Get Started
        </p>
        <p className="bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-transparent bg-clip-text font-bold text-2xl my-4">
          The possibilities are <br /> beyond your imagination
        </p>
        <p className="text-[#81AFDD] font-regular">
          Yet bed any for travelling assistance indulgence unpleasing. Not{" "}
          <br /> thoughts all exercise blessing. Indulgence way everything joy{" "}
          <br />
          alteration boisterous the attachment. Party we years to order <br />{" "}
          allow asked of.
        </p>
        <p className="text-[#FF8A71] mt-4 cursor-pointer">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
};

export default Possibility;
