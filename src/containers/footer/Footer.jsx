import React from 'react'
import Links from './Links'
const Footer = () => {
  return (
    <div className='w-full h-[950px] bg-[#031B34] p-32'>
<div className=' bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-transparent bg-clip-text text-5xl font-bold text-center'><span>Do you want to step in to the <br />future before others</span></div>
   
<div className='flex items-center justify-center'>
    <div className='border w-[218px] h-[65px] text-white flex items-center justify-center my-20 cursor-pointer'>
<p>Request Early Access</p>
    </div>
    </div>
    <div className='my-10 flex '>
<div className='text-white w-2/5'>
  <p className='text-5xl font-bold mt-10'>GPT-3</p>
<p className=' mt-8'>Crechterwoord K12 182 DK <br />Alknjkcb, All Rights Reserved</p>
</div>
<div className='w-3/5 text-white flex justify-around items-start'>
  <Links head={"Links"} list={["Overons","Social Media","Counters","Contact"]}/>
  <Links head={"Company"} list={["Terms & Condition","Privacy Policy","Contact"]}/>
  <Links head={"Get in touch"} list={["Crechterwoord K12","182 DK Alknjkcb","085-132567"]}/>
</div>
    </div>
    <div className='mt-32 text-white text-center'><p className='font-bold'>© 2024 GPT-3. All rights reserved.</p></div>
</div>
  )
}

export default Footer