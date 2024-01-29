import React from "react";
import atlassian from "../../assets/atlassian.png";
import slack from "../../assets/slack.png";
import google from "../../assets/google.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

const Brands = () => {
  return (
    <div className="flex justify-center my-12">

      <a href="https://www.google.com/" target="_blank">
        <img className="px-4 h-7 cursor-pointer" src={google} alt="google" />
      </a>

      <a href="https://slack.com/intl/en-in" target="_blank">
        <img className="px-4 h-7 cursor-pointer" src={slack} alt="slack" />
      </a>

      <a href="https://www.atlassian.com/" target="_blank">
        <img src={atlassian} alt="atlassian"/>
      </a>
      <a href="https://www.dropbox.com/" target="_blank">
        <img className="px-4 h-7 cursor-pointer" src={dropbox} alt="dropbox" />
      </a>

      <a href="https://www.shopify.com/in" target="_blank">
        <img className="px-4 h-7 cursor-pointer" src={shopify} alt="shopify" />
      </a>
      
    </div>
  );
};

export default Brands;
