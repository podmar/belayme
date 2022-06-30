import { Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ButtonLogout from "../components/ButtonLogout";
import UseIsAuthenticated from '../utils/UseIsAuthenticated';
// import NavBar from '../components/NavBar'

function Home() {
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState();
  setIsUserLoggedIn(UseIsAuthenticated());

  

  const goToRegister = () => {
    navigate("/register")
  }

  return (
    <div>
    {/* <div className='home-background'> */}
        <Typography variant='h2' className='app-title'>
            belayme
        </Typography>
        <Button 
            variant="contained"
            color="secondary"
            size='large'
            onClick={goToRegister}
            >
            Find a belayer
        </Button>
        <div>
          <ButtonLogout/>
        </div>
        <div>
          {isUserLoggedIn ? "User is currently logged in" : "No user logged in."}
        </div>

        {/* <NavBar/> */}
    </div>
  )
}

export default Home