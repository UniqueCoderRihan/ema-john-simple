import React, { Children, createContext,  } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProviders = ({children}) => {
    // const 
    const CreateUserEmail =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const SingIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const AuthInfo = {
        CreateUserEmail,
        SingIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;