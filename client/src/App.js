import React, { useEffect } from 'react'
import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import "@fontsource/roboto"
import CssBaseline from "@mui/material/CssBaseline";
import {Container} from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { themeLightSettings } from './utils/muiThemesSettings';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import MyProfile from './views/MyProfile';
import ListView from './views/ListView';
import DetailPartnerView from './views/DetailPartnerView';
import ErrorPage from './views/ErrorPage';
import BelayRequest from './views/BelayRequest';
import Inbox from './views/Inbox';
import NavBottomWithLinks from './components/NavBottomWithLinks';
import { ClimbersContextProvider } from './context/ClimbersContext';
import { AuthContextProvider } from './context/AuthContext';
import NavBar from './components/NavBar';


function App() {
  //TODO data of the logged in user must go into the state to be read by the myprofile component (and others)
  const location = useLocation();

  // const addBackground = () => {
  //   console.log(location.pathname);
  //   if (location.pathname === "/" || location.pathname === "/register" || location.pathname === "/login" ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } 

  // useEffect(() => {
  //   addBackground()
  // }, [location])
  
    const themeLight = createTheme (themeLightSettings);

  return (
    <ThemeProvider theme= {themeLight}>
      <CssBaseline />
      <Container maxWidth="md">
      <AuthContextProvider>
        <ClimbersContextProvider>
          <div className="App">
            <header>
              <NavBar/>
              {/* TODO create a state variable for the view where the user is and create conditional statements for different variation of the NavBar */}
              <NavBottomWithLinks/>
            </header>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="list" element={<ListView />} />
                <Route path="belayrequest" element={<BelayRequest />} />
                <Route path="detail/:userid" element={<DetailPartnerView />} />
                <Route path="inbox" element={<Inbox />} />
                <Route path="profile" element={<MyProfile />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
          </div>
        </ClimbersContextProvider>
      </AuthContextProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
