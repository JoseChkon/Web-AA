var mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    image:String
},{timestamps:true})

module.exports = mongoose.model("User", UserSchema)