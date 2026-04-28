import React, { useEffect } from 'react'

const usefetch = async() => {
   
    const [data,setData]=useState([]);

    useEffect( ()=>{
        apiCall()
    },[])


    const apiCall = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const resdata = await res.json()
    setData(resData) 
    }

    return data;
    

    
}

export default usefetch