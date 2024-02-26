var mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    googleId:String,
    displayName:String,
    password:String,
    email:String,
    image:String
},{timestamps:true})

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

module.exports = mongoose.model("User", UserSchema)