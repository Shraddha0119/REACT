import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    {/* <div>
     
    <h1>hello i am Web Developer</h1>
    <div  className='count'>{count}</div>
    <button className='btn'  onClick={()=>{setCount(count+1)}}>Click</button>
    </div> */}
    </>
  )
}

export default App
