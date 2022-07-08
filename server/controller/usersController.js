import { issueToken } from "../utils/jwt.js";
import userModel from "../model/userModel.js";
import { encryptPassword, verifyPassword } from "../utils/bcrypt.js";

const register = async (req, res) => {
    try {
        const checkIfUserExists = await userModel.findOne({"email": req.body.email});

        if (checkIfUserExists) {
            res
            .status(400)
            .json({
                message: "User already exists, cannot register."
            })
        } else {
            // TODO: validate the password using express validator middleware

            const hashedPassword = await encryptPassword(req.body.password);

            const newUser = new userModel({
                nickname: req.body.nickname,
                password: hashedPassword,
                email: req.body.email,
                home_crag: req.body.home_crag,
            })

            try {
                const savedUser = await newUser.save()
                res
                .status(201)
                .json({message: "New user has been created",
                    user: {
                        nickname: savedUser.nickname,
                        email: savedUser.email,
                        home_crag: savedUser.home_crag,
                    }
                })
            } catch (error) {
                res
                //TODO check what status is correct here
                .status(400)
                .json({message: "Server error, registration failed: cannot save a new user", error: error})
                console.log("error", error, res);
            }
        };
    } catch (error) {
        res
        .status(400)
        .json({message: "Server error, registration failed: cannot check if user exists.", error: error})
        console.log("error", error, res);
    }
}

const login = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({"email": req.body.email});

        if (!existingUser) {
            res
            .status(200)
            .json({
                message: "User does not exist, register first."
            })
            
        } else {
            try {
                const passwordVerified = await verifyPassword(req.body.password, existingUser.password);
                if (!passwordVerified) {
                    res
                    .status(200)
                    .json({
                        passVerified: passwordVerified,
                        message: "Wrong password, please try again.", 
                    });
                } else {
                    const token = issueToken(existingUser._id); 
                    res
                    .status(200)
                    .json({
                        message: "login successful",
                        user: {
                            nickname: existingUser.nickname, 
                            email: existingUser.email, 
                            home_crag: existingUser.home_crag,
                            climbing_style: existingUser.climbing_style,
                            current_location: existingUser.current_location,
                            experience_y: existingUser.experience_y,
                            gear: existingUser.gear,
                            onsight_level: existingUser.onsight_level,
                            redpoint_level: existingUser.redpoint_level,
                            strengths: existingUser.strengths,
                            travelling: existingUser.travelling,
                            weight: existingUser.weight,
                        },
                        token: token,
                    });
                }
            } catch (error) {
                console.log("Cannot verify password, database or bcrypt error: ", error)
            }

        };
    } catch (error) {
        res
        .status(400)
        .json({message: "Server error, login failed: cannot check if user exists.", error: error})
        console.log("error", error, res);
    }
};

const getProfile = (req, res) => {
    res
    .status(200)
    .json({
        nickname: req.user.nickname,
        email: req.user.email,
        home_crag: req.user.home_crag,
        about: req.user.about,
        climbing_style: req.user.climbing_style,
        current_location: req.user.current_location,
        experience_y: req.user.experience_y,
        gear: req.user.gear,
        onsight_level: req.user.onsight_level,
        redpoint_level: req.user.redpoint_level,
        strengths: req.user.strengths,
        travelling: req.user.travelling,
        weight: req.user.weight,
    });
  };

  const updateProfile = async (req, res) => {

    try {
        const updatedUser = await userModel
        .findByIdAndUpdate(req.user._id, req.body, {new: true} );

        if (!updatedUser) {
            res
            .status(200)
            .json({
                message: "User does not exist, register first."
            })

        } else {
            res
            .status(200)
            .json({
                message: `The profile of ${req.user.nickname} has been updated.`,
                user: {
                    nickname: updatedUser.nickname, 
                    email: updatedUser.email, 
                    home_crag: updatedUser.home_crag,
                    about: updatedUser.about, 
                    climbing_style: updatedUser.climbing_style,
                    current_location: updatedUser.current_location,
                    experience_y: updatedUser.experience_y,
                    gear: updatedUser.gear,
                    onsight_level: updatedUser.onsight_level,
                    redpoint_level: updatedUser.redpoint_level,
                    strengths: updatedUser.strengths,
                    travelling: updatedUser.travelling,
                    weight: updatedUser.weight,
                }})
        }
    } catch (error)  {
        res
        .status(400)
        .json({message: "Server error, updating user data failed", error: error})
        console.log("error", error, res);
    }
  };

  const uploadPhoto = 

  const deleteProfile = async (req, res) => {

    try {
        const deletedUser = await userModel
        .findByIdAndDelete(req.user._id);

        if (!deletedUser) {
            res
            .status(200)
            .json({
                message: "User does not exist."
            })

        } else {
            res
            .status(200)
            .json({
                message: `The profile of ${req.user.nickname} has been deleted.`,
                user: {
                    nickname: deletedUser.nickname, 
                    email: deletedUser.email, 
                    home_crag: deletedUser.home_crag,
                    climbing_style: deletedUser.climbing_style,
                    current_location: deletedUser.current_location,
                    experience_y: deletedUser.experience_y,
                    gear: deletedUser.gear,
                    onsight_level: deletedUser.onsight_level,
                    redpoint_level: deletedUser.redpoint_level,
                    strengths: deletedUser.strengths,
                    travelling: deletedUser.travelling,
                    weight: deletedUser.weight,
                }
            });
        }
    } catch (error)  {
        res
        .status(400)
        .json({message: "Server error, deleting user profile failed", error: error})
        console.log("error", error, res);
    }
  };

//#endregion
export { register, login, getProfile, uploadPhoto, updateProfile, deleteProfile };