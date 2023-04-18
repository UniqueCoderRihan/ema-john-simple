import React, { Children, createContext, useEffect, useState,  } from 'react';
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    const CreateUserEmail =(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
       
    }
    // google Provider Setup;
    const continueWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const SingIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const SingOutUser= ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        
        const unsubscrive = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscrive();
        }
    },[])
    const AuthInfo = {
        CreateUserEmail,
        SingIn,
        SingOutUser,
        user,
        loading,
        continueWithGoogle
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;