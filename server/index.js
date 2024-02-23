var app = require("./app.js")
var connectDB = require("./db.js")
var dotenv = require("dotenv")
dotenv.config();


const main = () =>{
    app.listen(process.env.BACKEND_PORT,()=>{
        console.log("Server running")
    })
    connectDB()
}

main()