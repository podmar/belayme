import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    nickname: {
        type: String,
        required: true,
    },
    password: {
         type: String,
         required: true,
     },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    home_crag: {
        type: String,
    },
    current_location: {
        type: String,
    }, 
    travelling: {
        type: Boolean,
    },
    gear: {
        type: Array,
    }, 
    climbing_style: {
        type: Array,
    }, 
    weight: {
        type: Number,
    }, 
    experience_y: {
        type: Number,
    }, 
    about: {
        type: String,
    }, 
    strengths: {
        type: Array,
    }, 
    redpoint_level: {
        type: String,
    },
    onsight_level: {
        type: String,
    },
    image: {
        type: String,
    },
 }, {timestamps: true}); 

const userModel = mongoose.model("User", userSchema);

export default userModel;