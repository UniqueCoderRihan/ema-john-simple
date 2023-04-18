import React, { Children, createContext,  } from 'react';

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const user = {displayName: 'habib'}
    const AuthInfo = {user}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;