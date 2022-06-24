import React, { useState } from 'react'
import './App.css';
import { Routes, Route} from 'react-router-dom';
import "@fontsource/roboto"
import CssBaseline from "@mui/material/CssBaseline";
import {Container} from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import NavBar from './components/NavBar';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import MyProfile from './views/MyProfile';
import ListView from './views/ListView';
import DetailPartnerView from './views/DetailPartnerView';
import ErrorPage from './views/ErrorPage';
import BelayRequest from './views/BelayRequest';
import Inbox from './views/Inbox';

function App() {
  const {user, SetUser} = useState({});

  //TODO move the mui theme to a separate component
  //#region MUI THEME
  const themeLight = createTheme ({
    palette: {
      type: 'light',
      primary: {
        main: '#117A65',
      },
      secondary: {
        main: '#f1c40f',
      },
      error: {
        main: '#c94b60',
      },
      background: {
        default: '#e0e0e0',
        paper: '#f5f5f5',
      },
    },
    shape: {
      borderRadius: 20,
    },
    spacing: 10,
  });
  //#endregion
  return (
    <ThemeProvider theme= {themeLight}>
      <CssBaseline />
      <Container maxWidth="md">
        <div className="App">
          <header>
            {/* TODO create a state variable for the view where the user is and create conditional statements for different variation of the NavBar */}
            <NavBar/>
          </header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="list" element={<ListView />} />
              <Route path="detail/:userid" element={<DetailPartnerView />} />
              <Route path="belayrequest" element={<BelayRequest />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="myprofile" element={<MyProfile />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
