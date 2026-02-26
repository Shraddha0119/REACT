import React,{useState} from 'react'
import axios from "axios"

const ProductForm = ({fetchProduct}) => {
    const [product,setProduct] = useState({
        name:"",
        price:"",
        category:""
    })

    
  const handleSubmit = async(e)=>{
    try {
        e.preventDefault()
       await axios.post("http://localhost:5000/api/product/create",product) ;
       alert("product added");
       fetchProduct()
    } catch (error) {
        console.log(error);
         
    }
   
  }

  const handleChange = (e) =>{
    setProduct({...product,[e.target.name]:e.target.value})
  }

  return (
 <form onSubmit={handleSubmit}>
    <input name='name' type="text" placeholder='Name' onChange={handleChange}/>
    <input name='price' type="number" placeholder='price' onChange={handleChange}/>
    <input name='category' type="text" placeholder='category' onChange={handleChange}/>
    <button>Add Product</button>
 </form>
  );
}

export default ProductForm