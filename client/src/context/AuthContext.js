import React, { createContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { getToken, saveToken } from '../utils/tokenHelpers';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [updatedProfile, setUpdatedProfile] = useState(null);
    const [userLoginStatus, setUserLoginStatus] = useState(false);
    const [error, setError] = useState(null);
    const redirectTo = useNavigate(); 

    const [modalMessage, setModalMessage] = useState(""); 
    const [modalType, setModalType] = useState(""); 
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const handleOpenSuccessModal = (type, message) => {
        setModalMessage(message);
        setModalType(type);
        setOpenSuccessModal(true);
        };
    const handleCloseSuccessModal = () => {
        setOpenSuccessModal(false);
        };

    const handleRegistrationInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    };

    const handleUserProfileChange = (event) => {
        setUpdatedProfile({...updatedProfile, [event.target.name]: event.target.value})
    };

    const generateUrlEncoded = (dataObject) => {
        let urlencoded = new URLSearchParams();
        const dataArray = Object.entries(dataObject);
        dataArray.forEach(([key, value]) => urlencoded.append(key, value));
        return urlencoded;
    };

    const register = async (event) => {
        event.preventDefault();

        const urlencoded = generateUrlEncoded(user);
        
        let requestOptions = {
            method: "POST",
            body: urlencoded,
        };

        try {
            const response = await fetch("http://localhost:5001/users/register", requestOptions);
            const result = await response.json();
            redirectTo("/login");
            handleOpenSuccessModal("success", "Welcome to belayme. Login to find other climbers nearby.");
        } catch (error) {
            console.log("cannot register user", error)
        }
    };

    const login = async (event) => {
        event.preventDefault();

        const urlencoded = generateUrlEncoded(user);

        let requestOptions = {
            method: "POST",
            body: urlencoded,
        };

        try {
            const response = await fetch("http://localhost:5001/users/login", requestOptions);
            const result = await response.json();
            // console.log("result",result);
            setUser(result.user);
            setUserLoginStatus(true);
            const { token } = result;
            if (token) {
                saveToken(token);
                redirectTo("/profile"); 
                handleOpenSuccessModal("success", "You have been successfully logged in.");
            } else {
                console.log("Cannot save the token in local storage, token not found in re response.")
                handleOpenSuccessModal("error", "We could not authorize your credentials, please try again.");
            }
 
        } catch (error) {
            console.log("cannot login user", error)
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        //TODO check if set to false of empty object
        setUser(null);
        setUserLoginStatus(false);
        redirectTo("/");
        handleOpenSuccessModal("success", `We logged you out.`);
        console.log("user logged out");
    }; 

    // TODO getUser function with token
    
    //TODO write this using the custom hook
    const checkIfUserLoggedIn = () => {
        const token = getToken();
        // const isAuthenticated = useIsAuthenticated()
        if (token) {
            setUserLoginStatus(true); 
            if (!user) {
                getUser(token);
            }
        } else {
            setUserLoginStatus(false);
            setUser(null);
            redirectTo("/")
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
            about: result.about,
            climbing_style: result.climbing_style,
            current_location: result.current_location,
            experience_y: result.experience_y,
            gear: result.gear,
            onsight_level: result.onsight_level,
            redpoint_level: result.redpoint_level,
            strengths: result.strengths,
            travelling: result.travelling,
            weight: result.weight,
            // avatarPicture: result.avatar,
        });
        } catch (error) {
        console.log("Error fetching profile after refresh, profile endpoint", error);
        setError("login first");
        }
    }; 

    //TODO display notification that the account has been updated
    const updateProfile = async (event) => {
        const token = getToken();

        const urlencoded = generateUrlEncoded(updatedProfile);

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow',
        };

        try {
        const response = await fetch(
            "http://localhost:5001/users/profile",
            requestOptions
        );
        const result = await response.json();
        console.log("response", result);
        setUser({
            email: result.user.email,
            nickname: result.user.nickname,
            about: result.user.about,
            climbing_style: result.user.climbing_style,
            current_location: result.user.current_location,
            experience_y: result.user.experience_y,
            gear: result.user.gear,
            onsight_level: result.user.onsight_level,
            redpoint_level: result.user.redpoint_level,
            strengths: result.user.strengths,
            travelling: result.user.travelling,
            weight: result.user.weight,
            // avatarPicture: result.avatar,
        });
        // redirectTo("/profile");
        handleOpenSuccessModal("success", result.message);
        } catch (error) {
        console.log("Error updating profile", error);
        setError("login first");
        }
    };

    const deleteProfile = async (event) => {
        event.preventDefault();
        const token = getToken();

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
        };

        try {
        const response = await fetch(
            "http://localhost:5001/users/profile",
            requestOptions
        );
        const result = await response.json();
        console.log("response", result);
        logout();
        handleOpenSuccessModal("success", result.message);
        } catch (error) {
        console.log("Error updating profile", error);
        setError("login first");
        }
    };

    useEffect(() => {
      checkIfUserLoggedIn();
    }, [userLoginStatus]);
    

    return (
        <AuthContext.Provider
        value={{ user, setUser, userLoginStatus, setUserLoginStatus, register, login, logout, handleRegistrationInputChange, updatedProfile, setUpdatedProfile, updateProfile, handleUserProfileChange, deleteProfile, openSuccessModal, handleOpenSuccessModal, handleCloseSuccessModal, modalMessage}}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
