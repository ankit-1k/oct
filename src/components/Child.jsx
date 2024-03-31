import React, { useState } from 'react'

const Child = () => {
  const [dt,setDt]=useState([])
  fetch('https://fakestoreapi.com/products')
  .then(response=>response.json())
  .then((data)=>(setDt(data)))
  return (
    <div>
        {
          dt.map((item,id)=>(
            <li>{item.id}</li>
          ))
        }
    </div>
  )
}

export default Child
