import React from 'react'
import './App.css';
import "@fontsource/roboto"
import {Button, Container} from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Typography from '@mui/material/Typography';
import Home from './views/Home';

function App() {
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
        default: '#e0e0e0',
        paper: '#f5f5f5',
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
          <Home />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
