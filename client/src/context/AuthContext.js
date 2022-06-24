import React, { createContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const redirectTo = useNavigate(); 


    // const checkIfUserLoggedIn = () => {};
    // useEffect(() => {
    //     //TODO create a custom hook to check if user logged in
    // })

    return (
        <AuthContext.Provider
        value={ user, setUser, register, login, logout}
        >
            {{props.children}}
        </AuthContext.Provider>
    );
};
