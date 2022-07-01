import React, { createContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { saveToken } from '../utils/tokenHelpers';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState({});
    const redirectTo = useNavigate(); 

    //1 change handler for 4 fields
    const handleRegistrationInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    };

    const register = async (event) => {
        event.preventDefault();
        // console.log(user);
        let urlencoded = new URLSearchParams();
        urlencoded.append("nickname", user.nickname);
        urlencoded.append("email", user.email);
        urlencoded.append("home_crag", user.home_crag);
        urlencoded.append("password", user.password);

        let requestOptions = {
            method: "POST",
            body: urlencoded,
        };

        try {
            const response = await fetch("http://localhost:5001/users/register", requestOptions);
            const result = await response.json();
            // console.log("result",result);
            redirectTo("/login");
        } catch (error) {
            console.log("cannot register user", error)
        }
    };

    const login = async (event) => {
        event.preventDefault();
        // console.log(user);
        let urlencoded = new URLSearchParams();
        urlencoded.append("email", user.email);
        urlencoded.append("password", user.password);

        let requestOptions = {
            method: "POST",
            body: urlencoded,
        };

        try {
            const response = await fetch("http://localhost:5001/users/login", requestOptions);
            const result = await response.json();
            console.log("result",result);
            setUser(result.user)
            const { token } = result;
            if (token) {
                saveToken(token);
            } else {
                console.log("Cannot save the tocken in local storage, token not found in re response.")
            }
            redirectTo("/list");
        } catch (error) {
            console.log("cannot login user", error)
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        //TODO check if set to false of empty object
        setUser(false);
        console.log("user logged out");
    };

    // const checkIfUserLoggedIn = () => {};
    // useEffect(() => {
    //     //TODO create a custom hook to check if user logged in
    // })

    return (
        <AuthContext.Provider
        value={{ user, setUser, register, login, logout, handleRegistrationInputChange}}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
