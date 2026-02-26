import { useState,useEffect } from "react"
import axios from "axios"


const ProductList = () => {
    const[products,setproducts]= useState([])
    const[editID,setEditId]=useState(null)

    const[form,setForm]=useState({
        name:"",
        price:"",
        category:"",
    })

    const fetchProduct = async()=>{
        const res = await axios.get("http://localhost:5000/api/product/get");
        setproducts(res.data);
        
    }

    const deletefun= async(id)=>{
       
        
          const res = await axios.delete(`http://localhost:5000/api/product/delete/${id}`);
        fetchProduct()
    }

    const handleEdit= async(product)=>{
        setEditId(product._id)
        setForm({
            name:product.name,
            price:product.price, 
            category:product.category
        })

    }

    const handleChange = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const updateProduct = async()=>{
        const res = await axios.put(`http://localhost:5000/api/product/update/${editID}`,
            form
        );
        setEditId(null)
        setForm({
        name:"",
        price:"",
        category:"",
    })
     fetchProduct()
        
    }


    useEffect(()=>{
        fetchProduct();
    },[])



return (
    <div>
        <h2>Products</h2>

{ editID && (
<div style={{}}>
    <h3>Edit Product</h3>
    <input name='name' type="text" placeholder='Name' value={form.name} onChange={handleChange}/>
    <input name='price' type="number" placeholder='price' value={form.price} onChange={handleChange}/>
    <input name='category' type="text" placeholder='category' value={form.category} onChange={handleChange}/>
    <button onClick={updateProduct}>UpDate Product</button>
 </div>
)
}
        

      
{products.map((p)=>(
  <div key={p._id}>
     <div style={{border:"1px solid black"}}>
         <h1> {p.name}</h1>
         <h2> {p.price}</h2>
         <h3>  {p.category}</h3>
         <button onClick={()=>deletefun(p._id)}>Delete</button>
         <button onClick={()=>handleEdit(p)}>Update</button>
      </div>
            
    </div>

        ))}
    </div>
  );
}

export default ProductList