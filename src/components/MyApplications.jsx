import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

const MyApplications = () => {
  const { users } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  console.log(jobs)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/job-applications/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              const remaining = jobs.filter(job => job.job_id !== id);
              setJobs(remaining);
            }

          })

      }
    });
  }

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
                  <button onClick={() => handleDelete(job.job_id)} className="btn btn-outline text-sm">cancel</button>
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