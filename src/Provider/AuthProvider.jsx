import React, { useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';
import axios from 'axios';

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userProfileUpdate = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  // ✅ FIXED: Proper logout that removes JWT cookie first
  const signOutUser = async () => {
    setLoading(true);
    try {
      // Clear JWT token from backend
      await axios.post('http://localhost:5000/logout', {}, {
        withCredentials: true
      });

      // Sign out from Firebase
      await signOut(auth);

      console.log('✅ Logout successful: token cleared & firebase signed out');
    } catch (error) {
      console.error('❌ Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    users,
    loading,
    createUsers,
    signInUser,
    userProfileUpdate,
    signOutUser, // ✅ updated logout function
    googleSignIn,
  };

  // Observer for login
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      console.log('state change', currentUser?.email);

      if (currentUser?.email) {
        const user = {
          email: currentUser.email,
        };
        axios
          .post('http://localhost:5000/jwt', user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log('✅ JWT set:', res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.error('❌ JWT set failed:', err);
            setLoading(false);
          });
      } else {
        // 🔁 No need to call logout here anymore
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
