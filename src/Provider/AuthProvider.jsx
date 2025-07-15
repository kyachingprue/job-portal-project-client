import React, { useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const authInfo = {
    users,
    loading,
    createUsers,
    signInUser,
    userProfileUpdate,
    signOutUser
  }

  // observer in the firebase
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('state declare', currentUser);
      setUsers(currentUser);
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