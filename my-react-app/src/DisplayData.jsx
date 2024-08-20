import React, { useEffect, useState } from 'react'

export default function DisplayData() {

    const [data,setData]= useState([]);
  

    useEffect(()=>{


      fetch("https://fakestoreapi.com/products")
      .then(y=>y.json())
      .then(y=>{
        setData(y);
      })
      
    },[])
  return (
    <div>{
        
      data.map((v)=>{

            return (<div>{v.title}</div>)
        })
    }</div>
  )
}
