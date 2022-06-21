import userModel from "../model/userModel.js"

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
    try {
        const usersByLocation = await userModel
        .find({ "current.current_location": req.params.current_location})
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

export { getAllUsers, getUsersByCurrentLocation, getUserByID }; 