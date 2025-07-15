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
        <h2 className='text-3xl font-bold text-black'>All Jobs</h2>
        <p className='py-4 text-gray-600 text-sm'> Know your worth and find the job that qualify your life</p>
      </div>
      {/* // All Jobs Data Show */}
      <div className='min-h-screen grid grid-cols-1 my-10 md:grid-cols-2 space-y-5'>
        {
          jobs?.map(job => <AllJobs key={job._id} job={job}></AllJobs>)
        }
      </div>
    </div>
  );
};

export default Jobs;