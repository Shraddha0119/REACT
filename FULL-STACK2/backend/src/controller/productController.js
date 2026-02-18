import productModel from "../models/productmodel.js";


const createProduct = async()=>{
const {name,price,category}= req.body;

const product = await productModel.create({name,price,category});
console.log(product);

}
export default createProduct;