import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  const location = useLocation();
  if (users) {
    return children;
  }

  if (loading) {
    return <span className="loading loading-spinner flex justify-center min-h-screen  loading-xl"></span>
  }
  return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;