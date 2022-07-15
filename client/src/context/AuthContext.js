import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, saveToken } from "../utils/tokenHelpers";

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

  const [image, setImage] = useState();

  const url = "http://localhost:5001/users/";

  const handleRegistrationInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleUserProfileChange = (event) => {
    setUpdatedProfile({
      ...updatedProfile,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageSelectionChange = (event) => {
    setImage(event.target.files[0]);
    console.log("selected image", image);
    console.log("event.target", event.target.files[0]);
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
      const response = await fetch(
        url+"register",
        requestOptions
      );
      const result = await response.json();
      // console.log("result: ", result);
      // console.log("response: ", response);

      if (response.status === 400) {
        handleOpenModal("error", result.message);
      } else {
        redirectTo("/login");
        handleOpenModal("success", result.message);
      }
    } catch (error) {
      console.log("cannot register user", error);
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
      const response = await fetch(
        url+"login",
        requestOptions
      );
      const result = await response.json();
      const { token } = result;

      if (result.status === 400) {
        handleOpenModal("error", result.message);
      } else if (token) {
        setUser(result.user);
        setUserLoginStatus(true);
        saveToken(token);
        redirectTo("/profile");
        handleOpenModal("success", result.message);
      } else {
        console.log(
          "Cannot save the token in local storage, token not found in re response."
        );
        handleOpenModal("error", result.message);
      }
    } catch (error) {
      console.log("cannot login user", error);
      handleOpenModal(
        "error",
        "We could not authenthicate your credentials, please try again."
      );
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setImage(null);
    setUpdatedProfile(null);
    setUserLoginStatus(false);
    redirectTo("/");
    handleOpenModal("success", "We logged you out.");
  };

  //TODO write this using the custom hook
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
      redirectTo("/");
    }
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
        url+"profile",
        requestOptions
      );
      const result = await response.json();
      setUser(result);
        
      //   {
      //   email: result.email,
      //   nickname: result.nickname,
      //   about: result.about,
      //   climbing_style: result.climbing_style,
      //   current_location: result.current_location,
      //   experience_y: result.experience_y,
      //   gear: result.gear,
      //   onsight_level: result.onsight_level,
      //   redpoint_level: result.redpoint_level,
      //   strengths: result.strengths,
      //   travelling: result.travelling,
      //   weight: result.weight,
      //   image: result.image,
      //   _id: result._id,
      //   sent_requests: result.sent_requests,
      //   received_requests: result.received_requests,
      // });
    } catch (error) {
      console.log("Error fetching profile after refresh, profile endpoint", error);
      handleOpenModal("error", "Something went wrong, please login and try again.");
    }
  };

  const updateProfile = async () => {
    const token = getToken();

    const urlencoded = generateUrlEncoded(updatedProfile);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        url+"profile",
        requestOptions
      );
      const result = await response.json();
      setUser(
        result.user)
        
      //   {
      //   email: result.user.email,
      //   nickname: result.user.nickname,
      //   about: result.user.about,
      //   climbing_style: result.user.climbing_style,
      //   current_location: result.user.current_location,
      //   experience_y: result.user.experience_y,
      //   gear: result.user.gear,
      //   onsight_level: result.user.onsight_level,
      //   redpoint_level: result.user.redpoint_level,
      //   strengths: result.user.strengths,
      //   travelling: result.user.travelling,
      //   weight: result.user.weight,
      //   image: result.user.image,
      //   _id: result.user._id,
      //   sent_requests: result.sent_requests,
      //   received_requests: result.received_requests,
      // });
      setUpdatedProfile(null);
      handleOpenModal("success", result.message);
    } catch (error) {
      console.log("Error updating profile", error);
      handleOpenModal("error", "Something went wrong, please try again.");
    }
  };

  const uploadImage = async (event) => {
    event.preventDefault();
    const token = getToken();

    const formData = new FormData();
    formData.append("image", image);
    console.log("formData", image);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        headers: myHeaders,
        method: "POST",
        body: formData,
    };
    try {
      const response = await fetch(
        url+"profile/photoUpload",
        requestOptions
      );
      // console.log("response", response);
      const result = await response.json();
      // console.log("result", result);
      console.log(user);
      if (response.status === 200) {
        setUser({ ...user, image: result.imageURL });
        handleOpenModal("success", result.message);
        setImage(null)
      } else {
        handleOpenModal("error", result.message);
      }
    } catch (error) {
      console.log("error submiting picture", error);
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
      const response = await fetch(url+"profile", requestOptions);
      const result = await response.json();
      
      logout();
      handleOpenModal("success", result.message);

    } catch (error) {
      console.log("Error updating profile", error);
      handleOpenModal("error", "Something went wrong, please try again.");
    }
  };

  const requestBelay = async (climberID) => {
    console.log(`requesting belay to climber with the id ${climberID}`)
    const token = getToken();

    const urlencoded = generateUrlEncoded({sent_requests: climberID});

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: urlencoded,
    };

    try {
      const response = await fetch(url+"belayrequest", requestOptions);
      const result = await response.json();
      setUser(result.user);
      handleOpenModal("success", result.message);
      console.log("user after belay request: ", user.sent_requests)

    } catch (error) {
      console.log("Cannot fetch this climber and send a belay request to them.", error);
    }

  };

  useEffect(() => {
    checkIfUserLoggedIn();
  }, [userLoginStatus]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userLoginStatus,
        setUserLoginStatus,
        register,
        login,
        logout,
        handleRegistrationInputChange,
        updatedProfile,
        setUpdatedProfile,
        updateProfile,
        handleUserProfileChange,
        deleteProfile,
        openModal,
        handleOpenModal,
        handleCloseModal,
        modalMessage,
        modalType,
        image,
        handleImageSelectionChange,
        uploadImage,
        requestBelay,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
