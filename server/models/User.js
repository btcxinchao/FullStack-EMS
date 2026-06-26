import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email : { type : String , required : true , unique : true},
    password : { type : String , required : true },
    role : {type : String , emum : ["ADMIN" , "EMPLOYEE"], default : "EMPLOYEE"}
},{timestamps : true}
)
const User = mongoose.model("User", UserSchema) || mongoose.models.User

export default User