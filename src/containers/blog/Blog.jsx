import React from "react";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";
import Card from "./Card";

const Blog = () => {
  return (
    <div className="w-[1171px] h-[961.95px] mx-32 " id="blog">
      <p className="text-5xl font-bold bg-gradient-to-tr from-[#AE67FA] to-[#F49867] text-transparent bg-clip-text">
        A lot is happening, <br />
        We are blogging about it.
      </p>
      <div className="flex my-24">
        <div className="mx-2">
          <img src={blog01} className="h-[287.73px] " alt="" />
          <div className="bg-[#042C54] h-[417.03px] w-[407.27px] p-4">
            <p className="text-white">Jan 29, 2024</p>
            <p className="text-3xl font-bold text-[#FFFFFF]">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </p>
            <p className="mt-52 text-white">Read Full Article</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <Card
            img={blog02}
            title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}
          />
          <Card
            img={blog03}
            title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}
          />
          <Card
            img={blog04}
            title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}
          />
          <Card
            img={blog05}
            title={"GPT-3 and Open AI is the future. Let us exlore how it is?"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
