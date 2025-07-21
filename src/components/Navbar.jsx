import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/xing.png';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { users, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/jobs">All Jobs</NavLink></li>
      <li><NavLink to="/application/me">My Applications</NavLink></li>
      <li><NavLink to="/my-jobs">My Job Posts</NavLink></li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-sky-500/10">
      {/* Mobile Menu */}
      <div className="navbar-start">
        <div className="lg:hidden">
          <label htmlFor="my-drawer" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <img className="w-8 h-8" src={logo} alt="Logo" />
          Job Portal
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-2">
          {links}
        </ul>
      </div>

      {/* User Section */}
      <div className="navbar-end">
        {users ? (
          <div className="relative group">
            <div className='flex items-center justify-center gap-2'>
              <h2 className='text-sm'>{users?.displayName}</h2>
              <img className="w-10 h-10 rounded-full object-cover" src={users?.photoURL} alt="User" />
            </div>
            <ul className="hidden group-hover:block absolute top-12 right-0 bg-white shadow border rounded p-2 w-32 z-50">
              <li><Link to="/userProfile" className="block px-2 py-1 hover:text-blue-600">Profile</Link></li>
              <li><button onClick={handleSignOut} className="block px-2 py-1 hover:text-blue-600">Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn text-sm text-blue-600 bg-blue-100 hover:bg-blue-700 hover:text-white">Login / Register</button>
          </Link>
        )}
      </div>

      {/* Drawer Sidebar */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
