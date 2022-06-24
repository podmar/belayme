import React, { createContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const {user, setUser} = useState({});
    const redirectTo = useNavigate(); 

    //1 change handler for 3 fields
    const handleRegistrationInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    };

    let urlencoded = new URLSearchParams();
    urlencoded.append("nickname", user.nickname);
    urlencoded.append("email", user.email);
    urlencoded.append("nickname", user.password);

    let requestOptions = {
        method: "POST",
        body: urlencoded,
    };

    const register = async (nickname, email, password) => {
        try {
            redirectTo("/list");
        } catch (error) {
            console.log("cannot register user", error)
        }
    };


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
