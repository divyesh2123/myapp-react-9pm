import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { DECREMENT, INCREMENT } from './action/counterAction';

export default function CounterRedux() {

   const counter = useSelector(y=>y.counter);

   const dis = useDispatch();

   const inc = ()=>{

    dis(INCREMENT());
   }

   const dec = ()=>{

    dis(DECREMENT());
   }
  return (
    <div>{counter}

        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
