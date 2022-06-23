import { json } from "express";
import userModel from "../model/userModel.js"
import encryptPassword from "../utils/encryptPassword.js"

// GET METHODS
//#region

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find({})
        if (allUsers.length === 0) {
            res
            .status(200)
            .json({message: "There are no users in the database."});
        } else {
            res
            .status(200)
            .json({results: allUsers.length, allUsers});
            console.log(allUsers);
        }
    } catch (err) {
        res
        .status(400)
        .json({error: err, message: "There is a problem with the server"});
    };
};

const getUsersByCurrentLocation = async (req, res) => {
    const {location} = req.query;
    if (location) {
        try {
            const usersByLocation = await userModel
            .find({ "current.current_location": {$gte: location}})
            .exec()
            if (usersByLocation.length === 0) {
                res
                .status(200)
                .json({message: "No data matches requested endpoint."})
            } else {
                console.log("userByLocation", usersByLocation)
                res
                .status(200)
                .json({ results: usersByLocation.length, usersByLocation })
            }
        } catch (err) {
            res
            .status(400)
            .json({err: err, message: "There is a problem with the server"})
        }
    } else {
        try {
            const allUsers = await userModel.find({})
            if (allUsers.length === 0) {
                res
                .status(200)
                .json({message: "There are no users in the database."});
            } else {
                res
                .status(200)
                .json({results: allUsers.length, allUsers});
                console.log(allUsers);
            }
        } catch (err) {
            res
            .status(400)
            .json({error: err, message: "There is a problem with the server"});
        };
    }
}

const getUserByID = async (req, res) => {
    try {
        const userByID = await userModel
        .find({_id: req.params._id})
        .exec()
        if (userByID.length === 0) {
            res
            .status(200)
            .json({message: "No data matches requested endpoint."})
        } else {
            res
            .status(200)
            .json({results: userByID.length, userByID})
        }
    } catch (err) {
        res
        .status(400)
        .json({err: err, message: "There is a problem with the server"})
    }
};
//#endregion

//POST METHODS
//#region

const register = async (req, res) => {
    console.log(req)
    try {
        const checkIfUserExists = await userModel.findOne({"contact.email": req.body.email});
        if (checkIfUserExists) {
            res
            .status(400)
            .json({
                message: "User already exists, cannot register."
            })
        } else {
            // TODO: validate the password using express validator middleware

            const hashedPassword = await encryptPassword(req.body.password);
            console.log(hashedPassword);

            const newUser = new userModel({
                nickname: req.body.nickname,
                password: hashedPassword,
                contact: {
                    email: req.body.email,
                }
            })

            try {
                const savedUser = await newUser.save()
                res
                .status(201)
                .json({message: "New user has been created",
                    user: {
                        nickname: savedUser.nickname,
                        email: savedUser.contact.email,
                    }
                })
            } catch (error) {
                res
                //TODO check what status is correct here
                .status(400)
                .json({message: "Server error, registration failed: cannot save a new user", error: error})
            }
        };
    } catch (error) {
        res
        .status(400)
        .json({message: "Server error, registration failed: cannot check if user exists.", error: error})
    }
}















//#endregion
export { getAllUsers, getUsersByCurrentLocation, getUserByID, register };