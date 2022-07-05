import userModel from "../model/userModel.js";

const getAllClimbers = async (req, res) => {
    try {
        const allClimbers = await userModel.find({})
        if (allClimbers.length === 0) {
            res
            .status(200)
            .json({message: "There are no climbers in the database."});
        } else {
            res
            .status(200)
            .json({results: allClimbers.length, allClimbers: allClimbers});
            // console.log(allUsers);
        }
    } catch (err) {
        res
        .status(400)
        .json({error: err, message: "There is a problem with the server"});
    };
};

// const getUser = (req, res) => {
//     console.log("req.user", req.user);
//     res
//     .status(200)
//     .json({
//         nickname: req.user.nickname,
//         email: req.user.email,
//     });
//   };

const getClimberByID = async (req, res) => {
    try {
        const climberByID = await userModel
        .find({_id: req.params._id})
        .exec()
        if (climberByID.length === 0) {
            res
            .status(200)
            .json({message: "No data matches requested endpoint."})
        } else {
            res
            .status(200)
            .json({results: climberByID.length, climberByID})
        }
    } catch (err) {
        res
        .status(400)
        .json({err: err, message: "There is a problem with the server"})
    }
};

// const getClimbersByCurrentLocation = async (req, res) => {
//     const {location} = req.query;
//     if (location) {
//         try {
//             const climbersByLocation = await userModel
//             .find({ "current_location": {$gte: location}})
//             .exec()
//             if (climbersByLocation.length === 0) {
//                 res
//                 .status(200)
//                 .json({message: "No data matches requested endpoint."})
//             } else {
//                 console.log("userByLocation", climbersByLocation)
//                 res
//                 .status(200)
//                 .json({ results: climbersByLocation.length, climbersByLocation })
//             }
//         } catch (err) {
//             res
//             .status(400)
//             .json({err: err, message: "There is a problem with the server"})
//         }
//     } else {
//         try {
//             const allClimbers = await userModel.find({})
//             if (allClimbers.length === 0) {
//                 res
//                 .status(200)
//                 .json({message: "There are no climbers in the database."});
//             } else {
//                 res
//                 .status(200)
//                 .json({results: allClimbers.length, allClimbers});
//                 // console.log(allUsers);
//             }
//         } catch (err) {
//             res
//             .status(400)
//             .json({error: err, message: "There is a problem with the server"});
//         };
//     }
// }

// export { getAllClimbers, getClimberByCurrentLocation, getClimbersByCurrentLocation};
export { getAllClimbers, getClimberByID };