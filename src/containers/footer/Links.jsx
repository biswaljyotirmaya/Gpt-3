import React from 'react';

const Links = (props) => {
  return (
    <div className='flex flex-col justify-around items-start'>
      <p className='font-bold mb-4'>{props.head}</p>
      {props.list.map((item, index) => (
        <p key={index} className='my-2 cursor-pointer'>{item}</p>
      ))}
    </div>
  );
}

export default Links;
