import React, { useContext } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { AuthContext } from '../context/AuthContext';
import ButtonIconLogin from './ButtonIconLogin';
import ButtonIconLogout from './ButtonIconLogout';
import { Box, Grid, Typography } from '@mui/material';
// import Typography from '@mui/material/Typography';
//import IconButton from '@mui/material/IconButton';
//import SearchIcon from '@mui/icons-material/Search';
//import MoreIcon from '@mui/icons-material/MoreVert';
// import { NavLink } from 'react-router-dom';

function NavBar() {
  const {userLoginStatus} = useContext(AuthContext);

  return (
    <>
      <AppBar 
        position="fixed" 
        color="primary"
        style={{ borderRadius: "0", 
        }}
        >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems={"center"}>
            <Grid item >
              <Typography variant='body1'>
                <Box
                sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize' }}
                >
                belayme
                </Box>
              </Typography>
            </Grid>
            <Grid item >
            {userLoginStatus ? <ButtonIconLogout/> : <ButtonIconLogin/>}
            </Grid>
              {/* <IconButton color="inherit">
                <MoreIcon />
              </IconButton>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton> */}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;

{/* <nav>
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/register">Register</NavLink>
    </li>
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
    <li>
      <NavLink to="/list">List</NavLink>
    </li>
    <li>
      <NavLink to="/profile">Profile</NavLink>
    </li>
    <li>
      <NavLink to="/inbox">Inbox</NavLink>
    </li>
    <li>
      <NavLink to="/belayrequest">Message</NavLink>
    </li>
    <li>
      <NavLink to="/detail/:userid">Detail</NavLink>
    </li>
  </ul>
</nav> */}