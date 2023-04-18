import React, { Children, createContext, useEffect, useState,  } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const CreateUserEmail =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
       
    }
    const SingIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const SingOutUser= ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscrive = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            return unsubscrive();
        }
    },[])
    const AuthInfo = {
        CreateUserEmail,
        SingIn,
        SingOutUser,
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;