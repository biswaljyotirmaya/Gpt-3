import React from 'react'

const Card = (props) => {
  return (
    <div className="h-[323.84px] w-[327.34px] mx-5">
          <img src={props.img} alt="" />
          <div className="bg-[#042C54] h-[193.37px] w-[327.34px] p-4">
            <p className="text-white">Jan 29, 2024</p>
            <p className="text-xl font-bold text-[#FFFFFF]">
              {props.title}
            </p>
            <p className="mt-10 text-white">Read Full Article</p>
          </div>
        </div>
  )
}

export default Card