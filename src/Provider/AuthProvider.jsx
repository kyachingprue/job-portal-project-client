import React, { useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import axios from 'axios';

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userProfileUpdate = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const authInfo = {
    users,
    loading,
    createUsers,
    signInUser,
    userProfileUpdate,
    signOutUser,
    googleSignIn
  }

  // observer in the firebase
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUsers(currentUser);
      console.log('state change', currentUser?.email);
      if (currentUser?.email) {
        const user = {
          email: currentUser.email
        }
        axios.post('http://localhost:5000/jwt', user, {
          withCredentials: true
        })
          .then(res =>
            console.log(res.data)
          )
      }
      setLoading(false);
    })
    return () => {
      unSubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;