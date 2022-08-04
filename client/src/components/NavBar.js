import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { AuthContext } from "../context/AuthContext";
import ButtonIconLogin from "./ButtonIconLogin";
import ButtonIconLogout from "./ButtonIconLogout";
import { Box, Typography } from "@mui/material";

function NavBar() {
  const { user, userLoginStatus } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" style={{ borderRadius: "0" }}>
        <Toolbar>
          <Typography
            textAlign={"left"}
            component="div"
            sx={{ flexGrow: 1 }}
            variant="body1"
          >
            <Box sx={{ fontWeight: "bold", fontSize: "h6.fontSize" }}>
              belayme
            </Box>
          </Typography>
          {user && userLoginStatus && (
            <Typography variant="body1">
              <Box>{`Welcome, ${user.nickname} |`}</Box>
            </Typography>
          )}
          {userLoginStatus ? <ButtonIconLogout /> : <ButtonIconLogin />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
