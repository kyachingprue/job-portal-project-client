import React, { useEffect, useState } from 'react';
import AllJobs from './AllJobs';


const Jobs = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      })
  }, [setJobs])
  return (
    <div>
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold text-black'>All Jobs</h2>
        <p className='py-2 md:py-4 text-gray-600 text-sm'> Know your worth and find the job that qualify your life</p>
      </div>
      {/* // All Jobs Data Show */}
      <div className='min-h-screen grid grid-cols-1 my-5 gap-3 md:my-10 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
        {
          jobs?.map(job => <AllJobs key={job._id} job={job}></AllJobs>)
        }
      </div>
    </div>
  );
};

export default Jobs;