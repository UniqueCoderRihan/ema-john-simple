import React, { Children, createContext, useEffect, useState,  } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);
    const CreateUserEmail =(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
       
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
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;