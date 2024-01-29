import React from "react";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <>
      <p className="mx-6 cursor-pointer">
        <Link spy={true} smooth={true} offset={50} duration={500} to="header">
          Home
        </Link>
      </p>

      <p className="mx-6 cursor-pointer">
        <Link spy={true} smooth={true} offset={50} duration={500} to="whatGpt3">
          What is GPT?
        </Link>
      </p>

      <p className="mx-6 cursor-pointer">
        <Link
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          to="possiblitiy"
        >
          Open AI
        </Link>
      </p>

      <p className="mx-6 cursor-pointer">
        <Link spy={true} smooth={true} offset={50} duration={500} to="features">
          Case Studies
        </Link>
      </p>

      <p className="mx-6 cursor-pointer">
        <Link spy={true} smooth={true} offset={50} duration={500} to="blog">
          Library
        </Link>
      </p>
    </>
  );
};

export default Menu;
