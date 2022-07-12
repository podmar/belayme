import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import ButtonLogout from "../components/ButtonLogout";
import ModalAlert from '../components/ModalAlert';
import { AuthContext } from '../context/AuthContext';

function Home() {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register")
  }
  const goToList = () => {
    navigate("/list")
  }

  const {userLoginStatus} = useContext(AuthContext);

  return (
    <div>
        <Typography variant='h2' className='app-title'>
            belayme
        </Typography>
        <Button 
            variant="contained"
            color="secondary"
            size='large'
            onClick={userLoginStatus? goToList : goToRegister}
            >
            Find a belayer
        </Button>
        {userLoginStatus && <div>
          <ButtonLogout/>
        </div>}
        <ModalAlert/>
    </div>
  )
}

export default Home