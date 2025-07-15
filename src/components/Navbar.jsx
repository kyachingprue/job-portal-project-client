import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/xing.png'
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { users, signOutUser } = useContext(AuthContext);
  const links = <div className='flex justify-center items-center gap-2'>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/jobs">All Jobs</NavLink></li>
    <li><NavLink to="/application/me">My Applications </NavLink></li>
    <li><NavLink to="/my-jobs">My Job Posts </NavLink></li>
  </div>

  const handleSignOut = () => {
    signOutUser()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div>
      <div className="navbar bg-sky-500/10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-2xl lg:text-3xl">
            <img className='w-5 md:w-10 h-5 md:h-10' src={logo} alt="" />
            Job portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            users ? <div className='flex items-center gap-2'>
              <p className='text-sm'>{users?.displayName}</p>
              <img className='w-10 h-10 rounded-full object-cover' src={users?.photoURL} alt="Login and Register user images" />
              <button onClick={handleSignOut} className="btn text-sm text-blue-600 bg-blue-100 hover:bg-blue-700 hover:text-white">Sign Out</button>
            </div>
              :
              <Link to="/login">
                <button className="btn text-sm text-blue-600 bg-blue-100 hover:bg-blue-700 hover:text-white">Login / Register</button>
              </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;