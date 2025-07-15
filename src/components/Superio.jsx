import React from 'react';
import iphoneImg from '../assets/icon-image/iphones.jpg'
import { FaApple } from 'react-icons/fa6';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const Superio = () => {
  return (
    <div>
      <div className='flex justify-center my-20 w-10/12 mx-auto items-center gap-5'>
        <div className='flex-1'>
          <img src={iphoneImg} alt="" />
        </div>
        <div className='flex-1 ml-14'>
          <h3 className='text-xl font-bold text-blue-500 py-4'>DOWNLOAD & ENJOY</h3>
          <h2 className='text-5xl font-semibold'>Get the Superio Job
            Search App</h2>
          <p className='text-gray-500 text-sm py-4'>Search through millions of jobs and find the right fit. Simply
            swipe right to apply.</p>
          <div className='flex justify-between my-6 items-center'>
            <div className='flex justify-center bg-black rounded-xl py-4 px-8 items-center gap-4'>
              <FaApple className='text-white text-3xl' />
              <div>
                <p className='text-sm text-gray-100'>Download on the</p>
                <h3 className='text-xl font-bold text-white'>Apple Store</h3>
              </div>
            </div>
            <div className='flex justify-center bg-black rounded-xl py-4 px-8 items-center gap-4'>
              <IoLogoGooglePlaystore className='text-white text-3xl' />
              <div>
                <p className='text-sm text-gray-100'>Get in on</p>
                <h3 className='text-xl font-bold text-white'>Google Play</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Superio;