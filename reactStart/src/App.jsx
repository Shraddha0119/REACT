import { useState ,useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    alert("hey welcome to mypage")
  
  },[])
  useEffect(() => {
    alert("count was change ")
  
  },[count])
  

  return (
    <>
     {/* <Navbar/> */}
    {/* <div>
     
    <h1>hello i am Web Developer</h1>
    <div  className='count'>{count}</div>
    <button className='btn'  onClick={()=>{setCount(count+1)}}>Click</button>
    </div> */}
    <div  className='count'>{count}</div>
     <button className='btn'  onClick={()=>{setCount(count+1)}}>Click</button>
    </>
  )
}

export default App
