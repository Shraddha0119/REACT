import createProduct from "../controller/productController.js";
import express from "express"


const productRouter = express.Router()
productRouter.post("/create",createProduct)

export default productRouter