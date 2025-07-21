import React from 'react';
import { FaCarSide, FaFileCircleCheck, FaServicestack } from 'react-icons/fa6';
import { GiCoins } from 'react-icons/gi';
import { HiSpeakerphone } from 'react-icons/hi';
import { IoIosRocket, IoLogoDesignernews } from 'react-icons/io';
import { MdHealthAndSafety } from 'react-icons/md';
import { RiCodeBoxLine } from 'react-icons/ri';

const Categories = () => {
  return (
    <div className='bg-white w-11/12 mx-auto'>
      <div className='text-center pt-10 md:pt-20 pb-4 mb:pb-8 '>
        <h3 className='text-xl md:text-3xl font-bold text-black'>Popular Job Categories</h3>
        <p className='text-sm py-3 text-gray-600'>2020 jobs live - 293 added today.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='flex p-2 w-full mx-auto md:p-5 rounded-xl border border-gray-300 items-center gap-5'>
          <div className='bg-slate-200 hover:bg-blue-700 rounded-xl p-2'> <GiCoins className='text-2xl md:text-5xl font-bold text-blue-600 hover:text-white' /></div>
          <div>
            <h2 className='text-sm md:text-xl font-bold'>Accounting / Finance</h2>
            <p className='text-gray-600 py-2 text-sm'>(2 open positions)</p>
          </div>
        </div>
        <div className='flex p-2 md:p-5 rounded-xl border border-gray-300 items-center gap-5'>
          <div className='bg-slate-200 hover:bg-blue-700 rounded-xl p-2'> <HiSpeakerphone className='text-2xl md:text-5xl font-bold hover:text-white text-blue-600' /></div>
          <div>
            <h2 className='text-sm md:text-xl font-bold'>Marketing</h2>
            <p className='text-gray-600 py-2 text-sm'>(86 open positions)</p>
          </div>
        </div>
        <div className='flex p-2 md:p-5 rounded-xl border border-gray-300 items-center gap-5'>
          <div className='bg-slate-200 hover:bg-blue-700 rounded-xl p-2'> <IoLogoDesignernews className='text-2xl md:text-5xl font-bold hover:text-white text-blue-600' /></div>
          <div>
            <h2 className='text-sm md:text-xl font-bold'>Design</h2>
            <p className='text-gray-600 py-2 text-sm'>(43 open positions)</p>
          </div>
        </div>
        <div className='flex p-2 md:p-5 rounded-xl border border-gray-300 items-center gap-5'>
          <div className='bg-slate-200 hover:bg-blue-700 rounded-xl p-2'> <RiCodeBoxLine className='text-2xl md:text-5xl font-bold hover:text-white text-blue-600' /></div>
          <div>
            <h2 className='text-sm md:text-xl font-bold'>Development</h2>
            <p className='text-gray-600 py-2 text-sm'>(12 open positions)</p>
          </div>
        </div>
        <div className='flex p-2 md:p-5 rounded-xl border border-gray-300 items-center gap-5'>
          <div className='bg-slate-200 hover:bg-blue-700 rounded-xl p-2'> <FaFileCircleCheck className='text-2xl md:text-5xl font-bold hover:text-white text-blue-600' /></div>
          <div>
            <h2 className='text-sm md:text-xl font-bold'>Human Resource</h2>
            <p className='text-gray-600 py-2 text-sm'>(55 open positions)</p>
          </div>
        </div>
        <div className='flex p-2 md:p-5 rounded-xl border border-gray-300 items-center gap-5'>
          <div className='bg-slate-200 hover:bg-blue-700 rounded-xl p-2'> <IoIosRocket className='text-2xl md:text-5xl font-bold hover:text-white text-blue-600' /></div>
          <div>
            <h2 className='text-sm md:text-xl font-bold'>Automotive Jobs</h2>
            <p className='text-gray-600 py-2 text-sm'>(2 open positions)</p>
          </div>
        </div>
        <div className='flex p-2 md:p-5 rounded-xl border border-gray-300 items-center gap-5'>
          <div className='bg-slate-200 hover:bg-blue-700 rounded-xl p-2'> <FaServicestack className='text-2xl md:text-5xl font-bold hover:text-white text-blue-600' /></div>
          <div>
            <h2 className='text-sm md:text-xl font-bold'>Customer Service</h2>
            <p className='text-gray-600 py-2 text-sm'>(2 open positions)</p>
          </div>
        </div>
        <div className='flex p-2 md:p-5 rounded-xl border border-gray-300 items-center gap-5'>
          <div className='bg-slate-200 hover:bg-blue-700 rounded-xl p-2'> <MdHealthAndSafety className='text-2xl md:text-5xl font-bold hover:text-white text-blue-600' /></div>
          <div>
            <h2 className='text-sm md:text-xl font-bold'>Health and Care</h2>
            <p className='text-gray-600 py-2 text-sm'>(25 open positions)</p>
          </div>
        </div>
        <div className='flex p-2 md:p-5 rounded-xl border border-gray-300 items-center gap-5'>
          <div className='bg-slate-200 rounded-xl hover:bg-blue-700 p-2'> <FaCarSide className='text-2xl md:text-4xl text-blue-600 hover:text-white' /></div>
          <div>
            <h2 className='text-sm md:text-xl font-bold'>Project Management</h2>
            <p className='text-gray-600 py-2 text-sm'>(92 open positions)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;