import express from "express";
import cors from "cors";
import usersRoute from "./routes/usersRoute.js"
import climbersRoute from "./routes/climbersRoute.js"
import * as dotenv from "dotenv";
import mongoose from "mongoose"; 
import passport from "passport";
import passportConfig from "./config/passport.js";
import { cloudinaryConfig } from "./config/cloudinary.js";

// leading .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const allowedDomains = ["https://belayme.netlify.app", "http://localhost:3000"]
const corsOptions = {
    origin: function (origin,callback) {
        if (!origin) return callback(null, true);
 
        if (allowedDomains.indexOf(origin) === -1) {
            const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
            return callback(new Error(msg), false);
    }
    return callback(null, true);
    }, 
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
app.use('/climbers', climbersRoute);
app.use(passport.initialize());
passportConfig(passport)
cloudinaryConfig();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connection to MongoDB established"))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on the ${port} port.`); 
});