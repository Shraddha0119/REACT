import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config()

const app = express()
const PORT = process.env.PORT;

connectDB()

app.use("/api/product", productRouter)


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
