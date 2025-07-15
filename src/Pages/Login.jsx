import React, { useContext } from 'react';
import loginImg from '../assets/images/login.json'
import Lottie from 'lottie-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';


const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // User data upload to the firebase
    signInUser(email, password)
      .then(result => {
        if (result.user) {
          toast.success('🦄 User Login is Successfully!', {
            position: "top-right",
            autoClose: 2000,
          })
          form.reset()
          navigate(from)
        }
      })
      .catch(error => {
        console.log(error.message);
      })
  }
  return (
    <div className='bg-base-200'>
      <div className="w-10/12 flex mx-auto justify-center min-h-screen">
        <div className='flex-1 mt-10'>
          <Lottie classID='w-[400px]' animationData={loginImg}></Lottie>
        </div>
        <div className='flex-1 mt-28'>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h2 className='text-3xl font-bold py-5 text-center'>Login Now</h2>
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label text-gray-800">Email</label>
                <input type="email" className="input w-full" name='email' placeholder="Email" required />
                <label className="label text-gray-800">Password</label>
                <input type="password" className="input w-full" name='password' placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                <input type="submit" className='btn btn-primary my-2' value="Login" />
              </form>
              <p className='text-sm text-gray-600 '>Create account ? please <Link to="/register" className='text-blue-700 underline'>Register</Link> now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;