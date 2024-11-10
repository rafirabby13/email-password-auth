/* eslint-disable react/prop-types */
import { createContext } from "react";


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const value = {
        name: 'Fahim'
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;