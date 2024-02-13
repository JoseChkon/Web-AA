import app from "./app.js";
import ConnectDB from "./db.js";

const main = () =>{
    app.listen(3000)
    ConnectDB()
}

main()