import express from "express"
import morgan from "morgan"
import requestRoute from "./routes/oAuth.js"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(morgan("dev"))

app.use("/", requestRoute)

export default app