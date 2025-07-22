import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

const useAxiosSecure = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          signOutUser()
            .then(() => {
              navigate('/login');
            })
            .catch(err => {
              console.log(err.message);
            });
        }
        return Promise.reject(error);
      }
    );

    // Cleanup to prevent duplicate interceptors
    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, [signOutUser, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
