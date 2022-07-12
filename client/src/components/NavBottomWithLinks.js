import React, { useContext, useState } from 'react'; 
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink, Link } from 'react-router-dom';
import { Avatar, Paper } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

function NavBottomWithLinks() {
  const [value, setValue] = useState(0);
  const {user} = useContext(AuthContext);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        >
        <BottomNavigationAction
          component={NavLink} 
          to="/"
          label="Home" 
          icon={<HomeIcon />} 
        />
        <BottomNavigationAction 
          component={Link} 
          to="/list"
          label="List" 
          icon={<ListIcon />} 
        />
        { user && <BottomNavigationAction 
          component={Link} 
          to="/profile"
          label="Profile" 
          icon={ user.image ? 
            <Avatar
            src={user.image}
            alt={`Photo of ${user.nickname}`}
            sx={{ width: 23, height: 23 }}
            /> :
            <PersonIcon />} 
        />}
        <BottomNavigationAction 
          component={Link} 
          to="/inbox"
          label="Inbox" 
          icon={<MailIcon />} 
        />
        </BottomNavigation>
    </Paper>
  )
}

export default NavBottomWithLinks;