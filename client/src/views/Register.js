import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {AuthContext} from "../context/AuthContext.js";
import ButtonLogin from '../components/ButtonLogin.js';
import ModalAlert from '../components/ModalAlert';

function Register() {
  const { user, setUser, register, handleRegistrationInputChange } = useContext(AuthContext);
  // const { user, setUser, register, handleNicknameInputChange, handleEmailInputChange, handlePasswordInputChange, handleCragInputChange } = useContext(AuthContext);


  return (
    <>
      <Typography variant='h2'>
      Register
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
            required
            size='small'
            id="nickname-input"
            name="nickname"
            label="Nickname"
            defaultValue="lucy"
            // onChange={handleNicknameInputChange}
            onChange={handleRegistrationInputChange}
          />
        </div>
        <div>
          <TextField
            // error
            // helperText="Invalid email address."
            required
            size='small'
            id="email-input"
            name="email"
            label="Email"
            type="email"
            defaultValue="lucy@email.com"
            // onChange={handleEmailInputChange}
            onChange={handleRegistrationInputChange}
          />
        </div>
        <div>
        <TextField
          size='small'
          id="home-crag"
          name="home_crag"
          label="Your home crag"
          type="text"
          // autoComplete="Where do you currently live?"
          // onChange={handleCragInputChange}
          onChange={handleRegistrationInputChange}
        />
        </div>
        <div>
        <TextField
          // fullWidth
          size='small'
          id="password-input"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          // onChange={handlePasswordInputChange}
          onChange={handleRegistrationInputChange}

        />
        </div>

          {/* <TextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          /> */}
        <div>
          <Button
            type='submit'
            endIcon={<SendIcon />}
            variant='contained'
            onClick={register}
          >
            Register
          </Button>
        </div>
      </Box>
      <Box
        sx={{
          flexDirection: 'column',
        }}
      >
        <div>
        <p>
        Already have an account? 
        </p>
        </div>
        <div>
        <ButtonLogin/>
        </div>
        <ModalAlert/>
      </Box>
    </>
  )
}

export default Register