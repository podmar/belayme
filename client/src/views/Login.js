import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Login() {
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
            required
            size='small'
            id="nickname-input"
            label="Nickname"
            defaultValue="lucy"
          />
        </div>
        <div>
          <TextField
            // error
            // helperText="Invalid email address."
            required
            size='small'
            id="email-input"
            label="E-mail"
            type="email"
            defaultValue="lucy@email.com"
          />
        </div>
        <div>
          <TextField
            // fullWidth
            size='small'
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div>
          <Button
            type='submit'
            endIcon={<SendIcon />}
            variant='contained'
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
          <Button>
            {/* TODO Make this button work */}
            Go to registration page
          </Button>
        </div>
      </Box>
    </>  
  )
}

export default Login