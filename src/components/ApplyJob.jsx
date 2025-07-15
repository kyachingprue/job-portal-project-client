import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthContext from '../context/AuthContext';

const ApplyJob = () => {
  const { id } = useParams()
  const { users } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleJobApply = event => {
    event.preventDefault();
    const form = event.target;
    const linkIn = form.linkIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // Application data client side send to the mongodb database
    const applications = {
      job_id: id,
      applicant_email: users.email,
      linkIn,
      github,
      resume
    }
    fetch('http://localhost:5000/job-applications', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(applications)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast('🦄 Application is Successfully!', {
            position: "top-right",
            autoClose: 2000,
          })
          form.reset();
          navigate("/application/me")
        }
      })
  }
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto my-10 max-w-lg shrink-0 shadow-2xl">
        <div className="card-body">
          <h3 className='text-4xl font-bold text-center py-5'>Job Application</h3>
          <form onSubmit={handleJobApply} className="fieldset">
            <label className="label text-gray-800">LinkIn URL</label>
            <input type="url" className="input w-full" name='linkIn' placeholder="Enter your linkIn URL" required />
            <label className="label text-gray-800">Github URL</label>
            <input type="url" className="input w-full" name='github' placeholder="Enter your github URL" required />
            <label className="label text-gray-800">Resume URL</label>
            <input type="url" className="input w-full" name='resume' placeholder="Enter your resume URL" required />
            <input type="submit" className='btn btn-primary w-full my-3' value="Apply Now" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;