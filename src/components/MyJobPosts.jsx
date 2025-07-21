import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const MyJobPosts = () => {
  const { users } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleJobPost = event => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = newData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split('\n');
    newJob.responsibilities = newJob.responsibilities.split('\n');
    // Data send to mongodb database
    fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('🦄 My post Added is Successfully!', {
            position: "top-right",
            autoClose: 2000,
          })

          form.reset();
          navigate('/jobs')
        }
      })
  }

  return (
    <div>
      <div className='w-11/12 mx-auto my-10 border border-gray-200 rounded-xl'>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <div className="card-body">
            <h3 className='py-2 text-3xl font-semibold text-center'>My Job Posts</h3>
            <div className='divider'>OR</div>
            <form onSubmit={handleJobPost} className="fieldset">
              {/* Job Title and Job Location */}
              <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Job Title</label>
                  <input type="text" className="input w-full" name='title' placeholder="Job title" required />
                </div>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Job Location</label>
                  <input type="text" className="input w-full" name='location' placeholder="Job location" required />
                </div>
              </div>
              {/* Job Type and Job Category */}
              <div className='flex flex-col my-3 md:flex-row justify-between items-center gap-4'>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Job Type</label>
                  <select defaultValue="select a job type" name='jobType' className="select w-full" required>
                    <option disabled={true}>Select a Job type</option>
                    <option>Full-Time</option>
                    <option>Intern</option>
                    <option>Part-Time</option>
                    <option>Hybrid</option>
                    <option>Remote</option>
                    <option>Contractual</option>
                  </select>
                </div>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Job Category</label>
                  <select defaultValue="Pick a color" name='category' className="select w-full" required>
                    <option disabled={true}>Select a Job Category</option>
                    <option>Engineer</option>
                    <option>Designer</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>Full Stack Developer</option>
                    <option>WordPress Developer</option>
                    <option>Shopify Developer</option>
                    <option>Mobile App Developer</option>
                    <option>Game Developer</option>
                    <option>Python Developer</option>
                    <option>JavaScript Developer</option>
                    <option>React Developer</option>
                    <option>API Developer / Integrator</option>
                  </select>
                </div>
              </div>
              {/* Job ApplicationDeadline and Job company name */}
              <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Job ApplicationDeadline</label>
                  <input type="date" className="input w-full" name='applicationDeadline' placeholder="Job ApplicationDeadline" required />
                </div>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Job Company Name</label>
                  <input type="text" className="input w-full" name='company' placeholder="Job Company name" required />
                </div>
              </div>
              {/* Job Salary Range */}
              <div className='pt-4'>
                <p className='text-sm text-gray-800'>#Job SalaryRange:-</p>
              </div>
              <div className='flex flex-col md:flex-row justify-between items-end gap-2'>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Min Salary</label>
                  <input type="number" className="input w-full" name='min' placeholder="min salary" required />
                </div>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Max Salary</label>
                  <input type="number" className="input w-full" name='max' placeholder="max salary" required />
                </div>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Currency</label>
                  <select defaultValue="select your currency" name='currency' className="select w-full">
                    <option disabled={true}>Select your currency</option>
                    <option>BDT</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>JPY</option>
                    <option>GBP</option>
                    <option>CNY</option>
                    <option>INR</option>
                  </select>
                </div>
              </div>
              {/* Job Description */}
              <div className='flex flex-col my-2 w-full gap-2'>
                <label className="label text-gray-800">Job Description</label>
                <textarea className="textarea w-full " name='description' placeholder="description" required></textarea>
              </div>
              {/* Job Requirements */}
              <div className='flex flex-col my-2 w-full gap-2'>
                <label className="label text-gray-800">Job Requirements</label>
                <textarea className="textarea w-full" name='requirements' placeholder="Put each requirements is a new line" required></textarea>
              </div>
              {/* Job Responsibilities */}
              <div className='flex flex-col my-2 w-full gap-2'>
                <label className="label text-gray-800">Job Responsibilities</label>
                <textarea className="textarea w-full" name='responsibilities' placeholder="Write each responsibility in a new line" required></textarea>
              </div>
              {/* Status */}
              <div className='flex flex-col my-2 w-full gap-2'>
                <label className="label text-gray-800">Status</label>
                <select defaultValue="active" name='status' className="select w-full">
                  <option disabled={true}>Select your status</option>
                  <option>active</option>
                  <option>Inactive</option>
                </select>
              </div>
              {/* hr_name and hr_email */}
              <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Hr Name</label>
                  <input type="text" className="input w-full" defaultValue={users?.displayName} name='hr_name' placeholder="hr name" required />
                </div>
                <div className='flex flex-col w-full gap-2'>
                  <label className="label text-gray-800">Hr Email</label>
                  <input type="email" className="input w-full" defaultValue={users?.email} name='hr_email' placeholder="hr email" required />
                </div>
              </div>
              {/* Photo URL */}
              <div className='flex flex-col my-2 w-full gap-2'>
                <label className="label text-gray-800">Company Logo</label>
                <input type="url" className="input w-full" name='company_logo' placeholder="company logo" required />
              </div>
              <input type="submit" className='w-full my-2 btn btn-primary' value="Job Post" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobPosts;