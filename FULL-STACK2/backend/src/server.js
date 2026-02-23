import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import cors from "cors"

dotenv.config()

const app = express()
const PORT = process.env.PORT;
app.use(express.json())
app.use(cors())

connectDB()

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.use("/api/product", productRouter)


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
