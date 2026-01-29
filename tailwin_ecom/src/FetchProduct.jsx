import React from 'react'
import { useState, useEffect } from 'react'

const FetchProduct = () => {

    const[product,setproduct]= useState([]);

    const getProducts = async()=>{
        let res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json()
        setproduct(data)
        
    }

    useEffect(()=>{
        getProducts()
    },[])


    

  return (
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
  )
}

export default FetchProduct