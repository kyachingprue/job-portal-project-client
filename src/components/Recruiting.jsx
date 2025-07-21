import React from 'react';
import speakerIcon from '../assets/icon-image/The Simple Truth About Recruitment And Selection .webp'

const Recruiting = () => {
  return (
    <div className='bg-green-500/10 flex items-center my-5 md:my-10 w-11/12 mx-auto justify-between rounded-2xl px-3'>
      <div className='md:ml-10'>
        <h3 className='text-xl md:text-3xl font-semibold py-2'>Recruiting?</h3>
        <p className='text-sm text-gray-500 md:pb-2'>Advertise your jobs to millions of monthly users and search 15.8 million <br />
          CVs in our database.</p>
        <button className='btn btn-primary text-sm my-3'>Start Recruiting Now</button>
      </div>
      <div>
        <img className='w-[300px] md:w-[360px] md:rounded-tr-2xl md:rounded-br-2xl' src={speakerIcon} alt="" />
      </div>
    </div>
  );
};

export default Recruiting;