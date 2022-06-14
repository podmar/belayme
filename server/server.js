import express from "express";
import cors from "cors";
import users from "./routes/users.js"
import * as dotenv from "dotenv";
import mongoose from "mongoose"; 

// leading .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use('/users', users);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connection to MongoDB established"))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on the ${port} port.`); 
});