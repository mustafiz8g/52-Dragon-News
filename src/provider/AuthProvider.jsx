import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";
export const AuthContext = createContext();



const AuthProvider = ({ children }) => {

    const[user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    console.log( loading ,user)

    const createNewUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (updatedData)=> {
      return updateProfile(auth.currentUser, updatedData)
    }

    const logOut = ( ) => {
      setLoading(true)
      return signOut(auth)
      
    }
  
    const authInfo = {
        user,
        setUser,
        createNewUser,
        loginUser,
        logOut,
        loading,
        updateUser
    }

    useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
      })
      return () => {
        unsubscribe();
      }
    },[])

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;