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
            size='small'
            id="nickname-input"
            name="nickname"
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
            name="email"
            label="Email"
            type="email"
            defaultValue="lucy@email.com"
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
        <Button>
        Go to login page
        </Button>
        </div>
      </Box>
    </>
  )
}

export default Register