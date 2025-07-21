import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';
import ApplyJob from './components/ApplyJob';
import PrivateRoute from './Route/PrivateRoute';
import MyApplications from './components/MyApplications';
import MyJobPosts from './components/MyJobPosts';
import Profile from './Pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/jobs/details/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/application/apply/:id',
        element: <PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>
      },
      {
        path: '/application/me',
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path: '/my-jobs',
        element: <PrivateRoute><MyJobPosts></MyJobPosts></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'userProfile',
        element: <Profile></Profile>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
