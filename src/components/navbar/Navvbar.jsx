import React from "react";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { RiCloseLine, RiMenu5Fill } from "react-icons/ri";
import Menu from "./Menu";

const Navvbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div id="header" className="flex justify-between items-center py-[2rem] px-[10rem] w-full">

      <div className="text-white font-medium text-lg text-sans  cursor-poiner  flex items-center">

        <img src={logo} alt="logo" className="w-[62.56px] h[16.02px] mr-6" />

        <Menu />

      </div>

      <div className="flex text-white items-center ml-24">
        <p>
          <a href="">Sign in</a>
        </p>
        <p className="bg-orange-600 rounded p-1 px-2 mx-2">
          <a href="">Sign up</a>
        </p>
      </div>

      <div>
        {toggleMenu ? (
          <RiCloseLine
            className="text-white h-[16px]"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          ""
        )}
        {toggleMenu && (
          <div className="flex justify-center flex-col items-center text-white bg-bg p-3 rounded-xl">

            <Menu />

            <p>
              <a href="">Sign in</a>
            </p>

            <p className="bg-orange-600 rounded p-1 px-2 mx-2">
              <a href="">Sign up</a>
            </p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navvbar;
