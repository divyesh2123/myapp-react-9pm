import axios from 'axios'
import React, { useEffect, useState } from 'react'
import authFetch from './axiosbase/authfetch';


export default function Account() {

    const [data,setData]=useState([])
    useEffect(()=>{

        let d =localStorage.getItem("token");
        authFetch.get("accounts")
        .then(y=>{
            console.log(y.data)
            setData(y.data); 

            if(y.status == "401")
            {
              //call refresh token
            }
        }).catch(y=>{

        })

    },[])

  return (
    <div>Account</div>
  )
}
