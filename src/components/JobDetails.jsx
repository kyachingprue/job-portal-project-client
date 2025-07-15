import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CiBookmark, CiLocationOn, CiStopwatch } from 'react-icons/ci';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JobDetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  const { _id, company_logo, title, jobType, location, applicationDeadline, salaryRange, requirements, description, company, category, hr_email, hr_name, responsibilities } = jobs;
  return (
    <div>
      <div className='w-11/12 my-10 mx-auto'>
        <div className='w-full rounded-xl mx-auto border p-8 border-gray-400'>
          <div className='flex items-center gap-7'>
            <div>
              <img className='w-12 h-12 rounded-2xl' src={company_logo} alt="" />
            </div>
            <div className='w-full'>
              <h2 className='text-xl font-semibold py-3 text-black'>{title}</h2>
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
              <div className='py-3'>
                <p className='font-bold text-black text-sm'>Description: <span className='text-gray-700 text-sm font-semibold'>{description}</span></p>
                <div className='flex py-5 items-center gap-10'>
                  <p className='text-sm font-bold text-black'>Company Name: <span className='text-sm text-gray-700 font-semibold'>{company}</span></p>
                  <p className='text-sm font-bold text-black'>Category: <span className='text-sm text-gray-700 font-semibold'>{category}</span></p>
                </div>
                <div className='flex items-center gap-4'>
                  <p className='text-sm font-bold text-black'>Client Name: <span className='text-sm text-gray-700 font-semibold'>{hr_name}</span></p>
                  <p className='text-sm font-bold text-black'>Client Email: <span className='text-sm text-gray-700 font-semibold'>{hr_email}</span></p>
                </div>
                <div className='py-5'>
                  <ol>
                    <p className='text-sm font-bold'>Responsibilities:-</p>
                    {
                      responsibilities?.map((res, index) =>
                        <li key={index}>{index + 1}.{res}</li>
                      )
                    }
                  </ol>
                </div>
              </div>
              <div>
                <Link to={`/application/apply/${_id}`} className='btn btn-primary'>Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;