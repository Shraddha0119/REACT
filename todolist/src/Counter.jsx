import React from 'react'
import usefetch from './Custom hooks/usefetch'

const Counter = () => {

  const data = usefetch()
  console.log(data);
  
  return (
    <>
    <h2></h2>
    </>
  )
}

export default Counter