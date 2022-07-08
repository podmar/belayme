import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {AuthContext} from "../context/AuthContext.js";
import ButtonRegister from '../components/ButtonRegister.js';
import ModalAlertSuccess from '../components/ModalAlertSuccess';

function Login() {
  const { user, setUser, login, handleRegistrationInputChange } = useContext(AuthContext);

  return (
    <>
      <Typography variant='h2'>
        Login
      </Typography>
      <Typography variant="subtitle1">
        to find a belayer
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          flexDirection: 'column',
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            // error
            // helperText="Invalid email address."
            required
            size='small'
            id="email-input"
            label="E-mail"
            type="email"
            name='email'
            defaultValue="user@email.com"
            onChange={handleRegistrationInputChange}
          />
        </div>
        <div>
          <TextField
            // fullWidth
            size='small'
            id="password-input"
            label="Password"
            type="password"
            name='password'
            autoComplete="current-password"
            onChange={handleRegistrationInputChange}

          />
        </div>
        <div>
          <Button
            type='submit'
            endIcon={<SendIcon />}
            variant='contained'
            onClick={login}
          >
            Login
          </Button>
        </div>
      </Box>
      <Box
        sx={{
          flexDirection: 'column',
        }}
      >
        <div>
          <p>No account yet?</p>
        </div>
        <div>
          <ButtonRegister/>
        </div>
      </Box>
      <ModalAlertSuccess/>
    </>  
  )
}

export default Login