import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
   nickname: {
       type: String,
       required: true
   },
   contact: {
       email: String,
       home_crag: String
   },
   current: {
       travelling: Boolean, 
       current_location: String
   }
}); 

const userModel = mongoose.model("User", userSchema);

export default userModel;