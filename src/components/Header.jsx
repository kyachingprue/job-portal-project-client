import React from 'react';
import coverImg from '../assets/images/coverImage.webp'
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { TfiEmail } from 'react-icons/tfi';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import { GrStatusGood } from 'react-icons/gr';
import { FcViewDetails } from 'react-icons/fc';


const Header = () => {
  return (
    <div className='h-full md:flex justify-between items-center bg-sky-500/10'>
      <div className='mx-2'>
        <h3 className='text-2xl md:text-5xl font-bold py-4 md:py-8 text-center md:text-start md:pl-4 text-black'>There Are <span className='text-blue-700'>93,178</span> Postings Here
          For you!</h3>
        <p className='text-gray-500 text-sm md:text-base pb-10 pl-4'>Find Jobs, Employment & Career Opportunities</p>
        <div className='bg-white mx-2 md:mx-0 md:ml-4 px-2 md:px-5 py-2 md:py-8 md:w-full flex border rounded-xl border-gray-400 shadow-xl'>
          <div className='flex items-center w-full gap-2'>
            <CiSearch className='text-black text-xl md:text-3xl' />
            <input type="search" className='text-black w-full h-5 md:h-10 text-sm' placeholder='Job titles , keywords, or company' name="" id="text" />
          </div>
          <div className="divider divider-horizontal"></div>
          <div className='flex items-center gap-2'>
            <CiLocationOn className='text-black text-xl md:text-3xl' />
            <input type="search" name="" className='h-5 md:h-10 mr-0 md:mr-2 text-sm' placeholder='City or postcode' id="" />
          </div>
          <div className='w-full'>
            <button className='bg-blue-800 py-2 md:py-4 text-white hover:bg-blue-900 rounded-xl w-full text-sm md:text-base mx-auto'>Find Jobs</button>
          </div>
        </div>
        <p className='text-sm font-bold text-black py-10 pl-4'>Popular Searches : <span className='text-sm font-normal text-gray-600 pl-4'>Designer, Developer, Web, IOS, PHP, Senior, Engineer,</span></p>
      </div>
      <div className='mx-auto hidden md:block'>
        <img className='relative' src={coverImg} alt="" />
        <div className='bg-white absolute top-40 rounded-xl p-2 w-56'>
          <div className='flex items-center gap-3'>
            <p className='bg-orange-200 rounded-2xl'> <TfiEmail className=' text-2xl text-orange-400 font-bold m-4' /></p>
            <h2 className='font-bold '>Work Inquiry From
              Ali Tufan</h2>
          </div>
        </div>
        <div className='bg-white absolute top-40 right-14 rounded-xl p-2 w-56'>
          <div className='p-5'>
            <h2 className='py-5 text-center'>10k+ Candidates</h2>
            <div>
              <div className="avatar-group -space-x-6">
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://i.ibb.co/3YLhhRmx/Albert-Einstein-1947-jpg.webp" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://i.ibb.co/r26yRfBh/rachel-carson-writers-photo-1.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://i.ibb.co/WNjjjJm6/gettyimages-1300546809-612x612.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="https://i.ibb.co/B2gmbxHV/apple-ceo-steve-jobs-speaks-during-an-apple-special-event-news-photo-1683661736.jpg" />
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
        <div className='bg-white absolute top-[450px] right-14 rounded-xl p-2 w-60'>
          <div className='flex items-center py-5 gap-3'>
            <p className='bg-orange-200 rounded-2xl p-2'> <LuBriefcaseBusiness className='text-2xl font-bold text-orange-600 ' /></p>
            <div>
              <h2 className='text-sm font-bold'>Creative Agency</h2>
              <p className='text-sm py-2'>Startup</p>
            </div>
            <p className='bg-orange-200 p-2 rounded-full'><GrStatusGood className='text-2xl font-bold text-white' /></p>
          </div>
        </div>
        <div className='bg-white absolute top-[540px] right-96 rounded-xl p-2 w-60'>
          <div className='flex items-center py-5 gap-3'>
            <p className='bg-green-200 rounded-2xl p-2'> <FcViewDetails className='text-2xl font-bold ' /></p>
            <div>
              <h2 className='text-sm font-bold'>Update your CV</h2>
              <p className='text-sm py-2'>It only takes a few seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;