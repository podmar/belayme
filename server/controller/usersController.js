import userModel from "../model/userModel.js"

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find({})
        if (allUsers.length === 0) {
            res
            .status(202)
            .json({message: "There are no users in the database."});
        }
        res
        .status(200)
        .json({number: allUsers.length, allUsers});
        console.log(allUsers);
    } catch (err) {
        res
        .status(400)
        .json({error: error, message: "There is a problem with the server"});
    };
};

export { getAllUsers }; 