import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';

const MyApplications = () => {
  const { users } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-applications?email=${users.email}`)
      .then(res => res.json())
      .then(data => {
        setJobs(data);
      })
  }, [users.email])
  return (
    <div>
      <h3 className='text-center py-4 text-4xl font-semibold'>My Application Data: {jobs.length} </h3>
      <div className="overflow-x-auto w-11/12 mx-auto my-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              jobs.map((job, index) => <tr key={index}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td className='text-xl font-bold'>
                  {job.title}
                  <br />
                  <span className="text-sm font-semibold text-gray-600">{job.applicant_email}</span>
                </td>
                <td>
                  <button className="btn btn-ghost text-sm">cancel</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;