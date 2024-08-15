import React from 'react'
import mydata from './data';

export default function Display() {
  return (
    <div>{mydata.map((y)=>{

        return(<img src={y.image}></img>)
    })}</div>
  )
}
