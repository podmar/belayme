import userModel from "../model/userModel.js"

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

        } else {
            try {
                //TODO hash the password with bcrypt

                const newUser = new userModel({
                    nickname: req.body.nickname,
                    // password: bcryptPassword,
                    contact: {
                        email: req.body.email,
                    }
                })

                res
                .status(201)
                .json({message: "New user has been created"})
            } catch (error) {
                res
                //TODO check what status is correct here
                .status(400)
                .json({message: "server error, registration failed", error: error})
            }
        };
    } catch (error) {
        res
        .status(400)
        .json({message: "server error, registration failed", error: error})
    }
}















//#endregion
export { getAllUsers, getUsersByCurrentLocation, getUserByID }; 