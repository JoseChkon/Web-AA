import mongoose from "mongoose";

const ConnectDB = () =>{
    mongoose.connect(process.env.DB_URL)
    console.log("Database running")
}

export default ConnectDB