import React from 'react'
import atlassian from "../../assets/atlassian.png"
import slack from "../../assets/slack.png"
import google from "../../assets/google.png"
import dropbox from "../../assets/dropbox.png"
import shopify from "../../assets/shopify.png"

const Brands = () => {
  return (
   <div className='flex justify-center my-12'>
    <img className='px-4 h-7' src={google} alt="google" />
    <img className='px-4 h-7' src={slack} alt="slack" />
    <img className='px-4 h-7' src={atlassian} alt="atlassian" />
    <img className='px-4 h-7' src={dropbox} alt="dropbox" />
    <img className='px-4 h-7' src={shopify} alt="shopify" />
   </div>
  )
}

export default Brands