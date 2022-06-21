import userModel from "../model/userModel.js"

const getAllUsers = async (req, res) => {
    // console.log("request: ", req);
    try {
        const allUsers = await userModel.find({})
        if (allUsers.length === 0) {
            res
            .status(202)
            .json({message: "There are no users in the database."});
        }
        res
        .status(200)
        .json({results: allUsers.length, allUsers});
        console.log(allUsers);
    } catch (err) {
        res
        .status(400)
        .json({error: err, message: "There is a problem with the server"});
    };
};

const getUsersByCurrentLocation = async (req, res) => {
    // console.log(req)
    try {
        console.log("hey")
        const usersByLocation = await userModel
        .find({ "current.current_location": req.params.current_location})

        // .find({ current: {current_location: req.params.current_location}})
        // .find({ current: {$elemMatch: {current_location: req.params.current_location}}})

        // .find({ current: {$elemMatch: {status: { $elemMatch: {current_location: req.params.current_location}}}}})
        // .find({ current.status.current_location: req.params.current_location}}})

        // .find({ nickname: req.params.current_location})
        .exec()
        console.log("userByLocation", usersByLocation)
        res
        .status(200)
        .json({ results: usersByLocation.length, usersByLocation })
    } catch (err) {
        res
        .status(400)
        .json({err: err, message: "There is a problem with the server"})
    }
}

export { getAllUsers, getUsersByCurrentLocation }; 