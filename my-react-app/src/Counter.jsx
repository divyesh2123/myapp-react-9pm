import React, { useState } from 'react'

export default function Counter() {

    console.log("this is called again")

   const [abc,setData]= useState(0);

    const inc = ()=>{
      
        setData(abc+1);

    }

    const dec = ()=>{

        setData(abc-1);
    }
  return (
    <div>{abc}
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
    </div>
  )
}
