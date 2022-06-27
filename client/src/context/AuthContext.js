import React, { createContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState({});
    const redirectTo = useNavigate(); 

    //TODO Check why this is not working
    //1 change handler for 4 fields
    const handleRegistrationInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    };

    // //nickname change handler
    // const handleNicknameInputChange = (event) => {
    //     console.log(event.target.value);
    //     setUser({nickname: event.target.value})
    // };

    // //email change handler
    // const handleEmailInputChange = (event) => {
    //     console.log(event.target.value);
    //     setUser({email: event.target.value})
    // };

    // //home_crag change handler
    // const handleCragInputChange = (event) => {
    //     console.log(event.target.value);
    //     setUser({home_crag: event.target.value})
    // };

    // //password change handler
    // const handlePasswordInputChange = (event) => {
    //     console.log(event.target.value);
    //     setUser({password: event.target.value})
    // };

    const register = async (event) => {
        event.preventDefault();
        console.log(user);
        let urlencoded = new URLSearchParams();
        urlencoded.append("nickname", user.nickname);
        urlencoded.append("email", user.email);
        urlencoded.append("home_crag", user.home_crag);
        urlencoded.append("password", user.password);
        // console.log(urlencoded);

        let requestOptions = {
            method: "POST",
            body: urlencoded,
        };

        try {
            const response = await fetch("http://localhost:5001/users/register", requestOptions);
            const result = await response.json();
            console.log("result",result);
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
        // value={{ user, setUser, register, login, logout, handleRegistrationInputChange}}
        value={{ user, setUser, register, handleRegistrationInputChange}}
        // value={{ user, setUser, register, handleNicknameInputChange, handleEmailInputChange, handlePasswordInputChange, handleCragInputChange}}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
