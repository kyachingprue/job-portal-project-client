import React from 'react';
import logo1 from '../assets/icon-image/img1.png'
import logo2 from '../assets/icon-image/img5.png'
import logo3 from '../assets/icon-image/img3.png'
import logo4 from '../assets/icon-image/img4.png'

const Mencap = () => {
  return (
    <div>
      <div className='flex justify-around mt-4 md:mt-8 pb-4 md:pb-8 border-b border-gray-400  items-center'>
        <img className='w-10 md:w-20' src={logo1} alt="Mencap images" />
        <img className='w-10 md:w-32' src={logo2} alt="HERBAL images" />
        <img className='w-10 md:w-20' src={logo1} alt="Mencap images" />
        <img className='w-10 md:w-32' src={logo2} alt="HERBAL images" />
        <img className='w-10 md:w-20' src={logo3} alt="NonStop images" />
        <img className='w-10 md:w-24' src={logo4} alt="Michael Page images" />
      </div>
    </div>
  );
};

export default Mencap;