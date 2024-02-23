var mongoose = require("mongoose")

const ConnectDB = async () =>{
    await mongoose.connect(process.env.DB_URI)
    console.log("Database running")
}

module.exports = ConnectDB