var app = require("./app.js")
var connectDB = require("./db.js")
var dotenv = require("dotenv")
dotenv.config();


const main = () =>{
    app.listen(3000,()=>{
        console.log("Server running")
    })
    connectDB()
}

main()