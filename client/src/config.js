const serverURL = process.env.NODE_ENV === "development" 
    ? "http://localhost:5001" 
    : "https://belay-me.herokuapp.com/"

export default serverURL;