import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import "@fontsource/roboto";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeLightSettings } from "./utils/muiThemesSettings";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import MyProfile from "./views/MyProfile";
import ListView from "./views/ListView";
import DetailPartnerView from "./views/DetailPartnerView";
import ErrorPage from "./views/ErrorPage";
import BelayRequest from "./views/BelayRequest";
import Inbox from "./views/Inbox";
import NavBottomWithLinks from "./components/NavBottomWithLinks";
import { ClimbersContextProvider } from "./context/ClimbersContext";
import { AuthContextProvider } from "./context/AuthContext";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const location = useLocation();

  const themeLight = createTheme(themeLightSettings);

  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Container maxWidth="md">
        <AuthContextProvider>
          <ClimbersContextProvider>
            <div className="App">
              <header>
                <NavBar />
                <NavBottomWithLinks />
              </header>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="list"
                  element={
                    <ProtectedRoute>
                      <ListView />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="belayrequest"
                  element={
                    <ProtectedRoute>
                      <BelayRequest />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="detail/:userid"
                  element={
                    <ProtectedRoute>
                      <DetailPartnerView />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="inbox"
                  element={
                    <ProtectedRoute>
                      <Inbox />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <ProtectedRoute>
                      <MyProfile />
                    </ProtectedRoute>
                  }
                />
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
