import React from 'react'
import './App.css';
import "@fontsource/roboto"
import {Button, Container} from "@mui/material"
// import { Theme } from './components/Theme';
import { ThemeProvider, createTheme } from "@mui/material/styles"

function App() {
  // const belaymeTheme = createTheme({
  //   status: {
  //     background: "linear-gradient(45deg, #F4D03F, #45B39D"
  //   }
  // })

  const theme = createTheme ({
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
        default: '#eeeeee',
        paper: '#e0e4e6',
      },
    },
    shape: {
      borderRadius: 20,
    },
  });

  return (
    <ThemeProvider theme= {theme}>
      <Container maxWidth="md">
        <div className="App">
          <header>
            
          </header>
          <Button 
            variant="contained"
            color="secondary">
            Find a belayer
          </Button>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
