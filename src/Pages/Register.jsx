import registerLottie from '../assets/images/register.json'
import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Register = () => {
  const { createUsers, userProfileUpdate, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // User data Loading to the firebase
    createUsers(email, password)
      .then(result => {
        console.log(result.user);
        if (result.user) {
          toast.success('🦄 User Register is Successfully!', {
            position: "top-right",
            autoClose: 2000,
          })

          const profile = {
            displayName: name,
            photoURL: photo
          }
          // user profile update
          userProfileUpdate(profile)
            .then(() => {
              console.log('user profile update successfully')
            })
            .catch(error => {
              console.log("user profile update error", error.message)
            })

          form.reset();
          navigate("/")

        }
      })
      .catch(error => {
        console.log("ERROR MESSAGE", error.message)
      })
  }

  const handleGoogleRegister = () => {
    googleSignIn()
      .then(result => {
        if (result.user) {
          toast.success('🦄 User Register is Successfully!', {
            position: "top-right",
            autoClose: 2000,
          })
        }

      })
      .catch(error => {
        console.log('User Google Register is failed', error.message)
      })
  }
  return (
    <div className='bg-base-200'>
      <div className="md:flex w-10/12 mx-auto min-h-screen">
        <div className='flex-1 pt-5 md:pt-10 mx-4 md:ml-5'>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h2 className='py-2 md:py-5 text-xl md:text-3xl font-bold text-center'>Register Now</h2>
              <div className='my-3 mx-auto'>
                <button onClick={handleGoogleRegister} className='btn btn-primary rounded-full'>Register with Google</button>
              </div>
              <form onSubmit={handleRegister} className="fieldset">
                <label className="label text-gray-800">Name</label>
                <input type="text" className="input w-full" name='name' placeholder="Enter your name" />
                <label className="label text-gray-800">Photo URL</label>
                <input type="url" className="input w-full" name='photo' placeholder="Enter your photoURL" />
                <label className="label text-gray-800">Email</label>
                <input type="email" className="input w-full" name='email' placeholder="Enter your email" />
                <label className="label text-gray-800">Password</label>
                <input type="password" className="input w-full" name='password' placeholder="Enter your password" required />
                <input type="submit" className='btn btn-primary my-3' value="Register" />
              </form>
              <p className='py-1 text-sm text-gray-600'>Already have an account. Please <Link to="/login" className='text-blue-700 underline'>Login</Link> now</p>
            </div>
          </div>
        </div>
        <div className='flex-1 mt-7 md:mt-20'>
          <Lottie className='md:w-[400px]' animationData={registerLottie}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;