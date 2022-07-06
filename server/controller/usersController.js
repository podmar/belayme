import { issueToken } from "../utils/jwt.js";
import userModel from "../model/userModel.js";
import { encryptPassword, verifyPassword } from "../utils/bcrypt.js";

const register = async (req, res) => {
    // console.log(req)
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

            // console.log(hashedPassword);

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
            }
        };
    } catch (error) {
        res
        .status(400)
        .json({message: "Server error, registration failed: cannot check if user exists.", error: error})
    }
}

const login = async (req, res) => {
    // console.log(req)
    try {
        const existingUser = await userModel.findOne({"email": req.body.email});

        if (!existingUser) {
            res
            .status(200)
            .json({
                message: "User does not exist, register first."
            })
            console.log(res)
            
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
    }
};

const getProfile = (req, res) => {
    console.log("req.user", req.user);
    res
    .status(200)
    .json({
        nickname: req.user.nickname,
        email: req.user.email,
        about: req.user.about,
    });
  };

//#endregion
export { register, login, getProfile };