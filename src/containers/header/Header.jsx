import React from "react";
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col items-center">
        <div className="pt-12">
          <div className="text-4xl font-bold  text-white p-4">
            <p className="bg-gradient-to-tr from-[#AE67FA] to-[#F49867] text-transparent bg-clip-text">Let’s Build Something <br /> amazing with GPT-3 <br /> OpenAI</p></div>
        </div>
        <div className="text-[#81AFDD] font-thin pt-4 tracking-tighter">
          <p>Yet bed any for travelling assistance indulgence unpleasing. <br /> Not thoughts all exercise blessing. Indulgence way <br />everything joy alteration boisterous the attachment. Party <br />we years to order allow asked of.</p></div>
        <div className="py-6">
          <input type="email" name="" id=""  placeholder="Your Email Address" className="bg-[#493a8362] h-10 px-8 placeholder:text-sm rounded-l focus:outline-none focus:text-white "/>
          <button className="bg-orange-600 h-10 px-4 hover:text-xl text-white rounded-r">Get Started</button>
        </div>
        <div className="flex items-center">
          <img src={people} alt="" className="h-6" />
          <p className="text-white text-xs pl-2">1,600 people requested access a visit in last 24 hours</p></div>
      </div>
      <div className="w-[30rem]"><img src={ai} alt="" /></div>
    </div>
  );
};

export default Header;
