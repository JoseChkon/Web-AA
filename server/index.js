import app from "./app.js";

const main = () =>{
    app.listen(3000,()=>{
        console.log("Server running on port 3000")
    })
}

main()