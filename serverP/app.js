import express from "express"
import morgan from "morgan"
import requestRoute from "./routes/oAuth.js"
import cors from "cors"
import passport from "passport"
import session from "express-session"

const app = express()

app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    methods:"GET,POST,PUT,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type, Authorization"
}))

app.use(session({
    secret:"YOUR SECRET KEY",
    resave:false,
    saveUninitialized:true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("dev"))

app.use("/", requestRoute)

export default app