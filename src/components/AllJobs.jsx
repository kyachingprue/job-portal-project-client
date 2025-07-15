import React from 'react';
import { CiBookmark, CiLocationOn, CiStopwatch } from 'react-icons/ci';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AllJobs = ({ job }) => {
  const { _id, company_logo, title, jobType, location, applicationDeadline, salaryRange, requirements } = job;
  return (
    <div className='w-11/12 mx-auto'>
      <div className='w-[628px] rounded-xl mx-auto border p-3 border-gray-400'>
        <div className='flex items-center gap-2'>
          <div>
            <img className='w-12 h-12 rounded-2xl' src={company_logo} alt="" />
          </div>
          <div className='w-full'>
            <div className='flex justify-between py-2 items-center'>
              <h2 className='text-xl font-semibold text-black'>{title}</h2>
              <CiBookmark className='text-xl' />
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex gap-2 items-center'>
                <MdOutlineBusinessCenter className='text-xl' />
                <p className='text-sm text-gray-600'>{jobType}</p>
              </div>
              <div className='flex gap-2 items-center'>
                <CiLocationOn className='text-xl' />
                <p className='text-sm text-gray-600'>{location}</p>
              </div>
              <div className='flex gap-2 items-center'>
                <CiStopwatch className='text-xl' />
                <p className='text-sm text-gray-600'>{applicationDeadline}</p>
              </div>
              <div className='flex gap-2 items-center'>
                <FaMoneyCheckDollar className='text-xl' />
                <div className='flex items-center'>
                  <p>{salaryRange.currency}:</p>
                  <p className='text-sm'>{salaryRange.min}TK-</p>
                  <p className='text-sm'>{salaryRange.max}Tk</p>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 py-3'>
              {
                requirements?.map((data, index) =>
                  <p className='bg-green-700/10 py-1 text-sm px-4 rounded-full' key={index}>{data}</p>
                )
              }
            </div>
            <Link to={`/jobs/details/${_id}`} className='btn btn-primary my-2'>Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;