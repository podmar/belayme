import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles"

function BelaymeTheme() {
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
    <div>BelaymeTheme</div>
  )
}

export default BelaymeTheme