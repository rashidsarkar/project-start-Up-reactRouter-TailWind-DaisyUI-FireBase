// Import necessary dependencies from React and Firebase
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config"; // Import your Firebase configuration

// Create a context for authentication data
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

// Define the AuthProvider component
function AuthProvider({ children }) {
  // Initialize a state variable to store the user's authentication status
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const singWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Function to create a new user account using Firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to sign in an existing user using Firebase
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Use an effect to listen for changes in the user's authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      // console.log("current value ", currentuser);
      setUser(currentuser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  ///////////
  // useEffect(() => {
  //   // Set up a listener that triggers when the user's authentication status changes
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser); // Update the user state with the current user
  //     console.log(currentUser); // Log the current user to the console
  //   });

  //   // Clean up the listener when the component unmounts
  //   return () => {
  //     unsubscribe(); // Unsubscribe from the authentication state changes
  //   };
  // }, []); // The empty dependency array ensures this effect runs only once

  // Create an object containing authentication-related functions
  const authInfo = {
    createUser,
    signInUser,
    user,
    logOut,
    loading,
    singWithGoogle,
  };

  // Provide the authInfo object to child components using the AuthContext
  return (
    <AuthContext.Provider value={authInfo}>
      {children} {/* Render the child components */}
    </AuthContext.Provider>
  );
}

export default AuthProvider; // Export the AuthProvider component
