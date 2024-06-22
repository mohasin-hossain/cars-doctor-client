import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log("on auth ", loggedUser);

      setUser(currentUser);
      setLoading(false);

      // If user exists, then issue a token
      if (currentUser) {
        axios
          .post("http://localhost:3000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response:", res.data);
          });
      } else {
        // if user is not logged in/ logout
        console.log("logout onauth", loggedUser);
        axios
          .post("http://localhost:3000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
