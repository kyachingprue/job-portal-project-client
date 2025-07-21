import React from 'react';
import laptopTypeImg from '../assets/icon-image/laptop-typing.avif'
import { IoCheckmark } from 'react-icons/io5';

const MillionsJob = () => {
  return (
    <div className='bg-white'>
      <div className='md:flex justify-center my-10 md:my-20 items-center gap-10'>
        <div className='relative'>
          <img className='rounded-xl w-11/12 mx-auto' src={laptopTypeImg} alt="" />
          <div className='hidden md:block'>
            <div className='bg-white absolute top-72 -right-16 border border-gray-300 rounded-xl p-2 w-56'>
              <div className='p-3'>
                <h2 className='py-3 text-center text-sm font-bold text-gray-600'>300k+ Employers</h2>
                <div>
                  <div className="avatar-group -space-x-6">
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/5WvMVc9s/images.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/gLFjcvLn/1656739257fiverr-logo-transparent.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/jP6NDMCh/images-1.png" />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img src="https://i.ibb.co/SgnfvkT/images-2.png" />
                      </div>
                    </div>
                    <div className="avatar avatar-placeholder">
                      <div className="bg-slate-300 w-12">
                        <span className='font-bold text-xl'>+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-14 h-14 hidden md:block absolute top-64 right-32 bg-blue-600 py-2 px-3 rounded-full'>
            <IoCheckmark className='text-white text-4xl' />
          </div>
        </div>
        <div className='px-4 md:ml-10'>
          <h3 className='text-xl pt-4 md:pt-0 md:text-4xl font-semibold text-black'>Millions of Jobs. Find the one that suits you.</h3>
          <p className='text-gray-600 text-sm py-2 md:py-5'>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>
          <div className='mb-3 flex flex-col'>
            <p className='text-sm flex items-center gap-2'><IoCheckmark className="text-xl" /> Bring to the table win-win survival</p>
            <p className='text-sm flex items-center gap-2'><IoCheckmark className="text-xl" /> Capitalize on low hanging fruit to identify</p>
            <p className='text-sm flex items-center gap-2'><IoCheckmark className="text-xl" /> But I must explain to you how all this</p>
          </div>
          <button className='btn btn-primary md:my-3'>Get Started</button>
        </div>
      </div>
      <div className='flex justify-around text-center items-center md:py-16'>
        <div className='text-center'>
          <h4 className='text-2xl md:text-5xl text-black font-bold'>4M</h4>
          <p className='text-sm text-gray-600 md:py-4'>4 million daily active users</p>
        </div>
        <div className='text-center'>
          <h4 className='text-2xl md:text-5xl text-black font-bold'>12K</h4>
          <p className='text-sm text-gray-600 md:py-4'>Over 12k open job positions</p>
        </div>
        <div className='text-center'>
          <h4 className='text-xl text-black md:text-5xl font-bold'>20M</h4>
          <p className='text-sm text-gray-600 md:py-4'>Over 20 million stories shared</p>
        </div>
      </div>
    </div>
  );
};

export default MillionsJob;