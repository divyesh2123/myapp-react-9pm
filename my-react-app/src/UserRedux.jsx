import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { UserError, UserRequest, UserSuc } from './action/userAction';

export default function UserRedux() {

    const use = useSelector(y=>y.user);

    const dis= useDispatch();
    console.log(use);

    useEffect(()=>{

        dis(UserRequest())
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(y=>y.json())
        .then(y=>{
            dis( UserSuc(y))
        }).catch(y=>{
            dis( UserError(y))
        })

    },[])
  return (
    <div>UserRedux</div>
  )
}
