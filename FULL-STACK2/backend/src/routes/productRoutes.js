import {createProduct, Getproduct, updateProduct,deleteProduct } from "../controller/productController.js";
import express from "express"


const productRouter = express.Router()
productRouter.post("/create",createProduct)
productRouter.get("/get",Getproduct)
productRouter.put("/update/:id",updateProduct)
productRouter.delete("/delete/:id",deleteProduct)


export default productRouter