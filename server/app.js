var express = require("express")
const session = require('express-session');
var morgan = require("morgan")
var cors = require("cors")

require("dotenv").config()
require("./controllers/google.js")

const routes = require("./routes/index.js")
const passport = require("passport");

const app = express()

app.use(express.json())

app.use(cors({
    origin: process.env.FRONTEND_URI,
    methods:"GET,POST,PUT,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type, Authorization"
}))

app.use(session({
    secret: "Hi",
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize());
app.use(passport.session())

app.use(morgan("dev"))

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', "https://frontend-h6od.onrender.com/");
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use("/", routes)

module.exports = app
