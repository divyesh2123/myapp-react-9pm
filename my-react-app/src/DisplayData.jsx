import React, { useEffect, useState } from 'react'

export default function DisplayData() {

    const [data,setData]= useState([]);

     const truncateText = React.useMemo(() => {
        console.log("this is the calculating");
      return text.slice(0, 30).concat('...');
},[text]);

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
