import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Register() {
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
            id="nickname-input"
            label="Nickname"
            defaultValue="lucy"
          />
          <TextField
            required
            id="email-input"
            label="E-mail"
            type="email"
            defaultValue="lucy@email.com"
          />
          <TextField
            id="password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
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
        </div>
        <div>
          <Button
            type='submit'
            endIcon={<SendIcon />}
          >
            Register
          </Button>
        </div>
      </Box>
    </>
  )
}

export default Register