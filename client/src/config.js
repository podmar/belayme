const serverURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5001/"
    : "https://belayme-server.vercel.app/";

export default serverURL;
