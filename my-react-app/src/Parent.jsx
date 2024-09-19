import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {

  const [data,setData]= useState([]);
  const [input,setInput]=useState(''); 

  const handleInput = (e)=>{

    setInput(e.target.value)
  }

  const remove = ()=>{

  }

  const handleSave= ()=>{

    //we are changing address because react compare it will shallow copy
    //if we change address than than it will reload
    let p = [...data];
    p.push(input);
    setData(p);

  }
  return (
    <div>
      <input type='text' onChange={handleInput}/>
      <input type='button' value="save" onClick={handleSave}/>
      <Child data={data} remove={remove}/>
    </div>
  )
}
