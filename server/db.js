var mongoose = require("mongoose")

const ConnectDB = async () =>{
    try{
    await mongoose.connect(process.env.DB_URI)
    console.log("Database running")
    } catch(error){
        console.log(error.message)
    }
}

module.exports = ConnectDB
