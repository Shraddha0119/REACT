import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'

const AxiosProduct = () => {

    const[product,setproducts]= useState([]);
    const[loading,setloading]=useState(false)
    const[error,setError] = useState("")

    const getProducts = async ()=>{

        try {
            setloading(true)
        let res = await axios.get("https://fakestoreapi.com/products");
        setproducts(res.data);
        setloading(false)
        } catch (error) {
          setError(error)
           setloading(false)
            
        }

    }

    useEffect(()=>{
        getProducts()
    },[])




  return (
<div className='p-6'>
    {loading && <h1 className='text-center text -2xl'>Loading...</h1>}
    {loading && <h1 className='text-center text-red-500'>{error}</h1>}

    <div className='p-5 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {product.map((item)=>(
          <>
          <div key={item.id}  
          className='border p 4 rounded shadow hover:shadow lg transition '>
            <img src={item.image} alt="" className='h-52 mx-auto'/>
            <h2 className='font bold mt 2 line clamp 2'> {item.title}</h2>
            <h3 className='text-green-500 font-semibold'>Rs - {item.price}</h3>
          </div>
          
          
          </>
            
        ))}
       
    </div>

</div>
  )
}

export default  AxiosProduct;