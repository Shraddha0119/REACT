import productModel from "../models/productmodel.js";


const createProduct = async(req,res)=>{
const product = new productModel(req.body)

const saved = await product.save()
res.json({massage:"product saved",data:saved})

}

const Getproduct = async(req,res)=>{
    const products = await productModel.find()
    res.json(products)
}



const updateProduct = async(req,res)=>{
const updateproduct = await productModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
)
res.json(updateProduct)

}

const deleteProduct = async(req,res)=>{
const updateproduct = await productModel.findByIdAndDelete(
    req.params.id)
res.json({ massage:"product delete",updateProduct})

};




export {createProduct,Getproduct,updateProduct,deleteProduct};