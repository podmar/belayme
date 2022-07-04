import React, { createContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { getToken, saveToken } from '../utils/tokenHelpers';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [userLoginStatus, setUserLoginStatus] = useState(false);
    const [error, setError] = useState(null);
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
            setUser(result.user);
            setUserLoginStatus(true);
            const { token } = result;
            if (token) {
                saveToken(token);
            } else {
                console.log("Cannot save the token in local storage, token not found in re response.")
            }
            redirectTo("/list");
        } catch (error) {
            console.log("cannot login user", error)
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        //TODO check if set to false of empty object
        setUser(null);
        setUserLoginStatus(false);
        console.log("user logged out");
    }; 

    // TODO getUser function with token
    // TODO getProfile on profile page

    const checkIfUserLoggedIn = () => {
        const token = getToken();
        if (token) {
            setUserLoginStatus(true); 
            if (!user) {
                getUser(token);
            }
        } else {
            setUserLoginStatus(false);
            setUser(null);
            console.log("No user logged in.")
        };
    };

    const getUser = async (token) => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        const requestOptions = {
            method: "GET",
            headers: myHeaders,
        };
        try {
        const response = await fetch(
            "http://localhost:5001/users/profile",
            requestOptions
        );
        const result = await response.json();
        console.log("result", result);
        setUser({
            email: result.email,
            nickname: result.nickname,
            // avatarPicture: result.avatar,
        });
        } catch (error) {
        console.log("Error fetching profile after refresh, profile endpoint", error);
        setError("login first ");
        }
    }; 

    useEffect(() => {
      checkIfUserLoggedIn();
    }, [userLoginStatus]);
    

    return (
        <AuthContext.Provider
        value={{ user, setUser, userLoginStatus, setUserLoginStatus, register, login, logout, handleRegistrationInputChange}}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
