import React, { createContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { getToken, saveToken } from '../utils/tokenHelpers';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [updatedProfile, setUpdatedProfile] = useState(null);
    const [userLoginStatus, setUserLoginStatus] = useState(false);
    const redirectTo = useNavigate(); 

    const [modalMessage, setModalMessage] = useState(""); 
    const [modalType, setModalType] = useState(""); 
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = (type, message) => {
        setModalMessage(message);
        setModalType(type);
        setOpenModal(true);
        };
    const handleCloseModal = () => {
        setOpenModal(false);
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
            handleOpenModal("success", "Welcome to belayme. Login to find other climbers nearby.");
        } catch (error) {
            console.log("cannot register user", error)
            handleOpenModal("error", "Something went wrong, please try again.");

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
            setUser(result.user);
            setUserLoginStatus(true);
            const { token } = result;
            if (token) {
                saveToken(token);
                redirectTo("/profile"); 
                handleOpenModal("success", "You have been successfully logged in.");
            } else {
                console.log("Cannot save the token in local storage, token not found in re response.")
                handleOpenModal("error", "We could not authenthicate your credentials, please try again.");
            }
 
        } catch (error) {
            console.log("cannot login user", error);
            handleOpenModal("error", "We could not authenthicate your credentials, please try again.");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        //TODO check if set to false of empty object
        setUser(null);
        setUserLoginStatus(false);
        redirectTo("/");
        handleOpenModal("success", "We logged you out.");
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
        // setError("login first");
        handleOpenModal("error", "Something went wrong, please logi n and try again.");
    }
    }; 

    //TODO display notification that the account has been updated
    // at the moment the app reloads on submit and the state variables are cleared, hence no notification.
    // with preventDefault the form is not submited and no patch request sent. 
    // const updateProfile = async (event) => {
    const updateProfile = async () => {

        // let profileChangeForm = event.target
        // event.preventDefault();
        // profileChangeForm.submit();

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
        // console.log("response", result);
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
        handleOpenModal("success", "Your profile has been updated.");
        // handleOpenModal("success", result.message);
        } catch (error) {
        console.log("Error updating profile", error);
        handleOpenModal("error", "Something went wrong, please try again.");
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
        // handleOpenModal("success", result.message);
        handleOpenModal("success", "Your profile has been deleted.");
        } catch (error) {
        console.log("Error updating profile", error);
        handleOpenModal("error", "Something went wrong, please try again.");
    }
    };

    useEffect(() => {
      checkIfUserLoggedIn();
    }, [userLoginStatus]);
    

    return (
        <AuthContext.Provider
        value={{ user, setUser, userLoginStatus, setUserLoginStatus, register, login, logout, handleRegistrationInputChange, updatedProfile, setUpdatedProfile, updateProfile, handleUserProfileChange, deleteProfile, openModal, handleOpenModal, handleCloseModal, modalMessage, modalType}}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
