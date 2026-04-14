import React from 'react'
import { useSelector } from 'react-redux'

const Data = () => {
    const userData = useSelector(state=>state.user);

  return (
    <div>
      {userData.data.map((item)=>(<h3>{item.id}</h3>))}
    </div>
  )
}

export default Data