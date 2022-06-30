import express from "express";
import cors from "cors";
import usersRoute from "./routes/usersRoute.js"
import * as dotenv from "dotenv";
import mongoose from "mongoose"; 
import passport from "passport";
import passportConfig from "./config/passport.js";

// leading .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const corsOptions = {
    origin: "http://localhost:3000", // or '*'
    credentials: true,
}; 

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors(corsOptions));
app.use('/users', usersRoute);
app.use(passport.initialize());
passportConfig()

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connection to MongoDB established"))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on the ${port} port.`); 
});