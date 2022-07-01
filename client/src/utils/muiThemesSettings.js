const themeLightSettings = {
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
  components: {
      MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      }, 
    }, 
  },
  shape: {
    borderRadius: 20,
  },
  spacing: 10,
};

const themeDarkSettings = {
  palette: {
    type: 'dark',
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
  components: {
      MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      }, 
    }, 
  },
  shape: {
    borderRadius: 20,
  },
  spacing: 10,
};

export {themeLightSettings, themeDarkSettings};