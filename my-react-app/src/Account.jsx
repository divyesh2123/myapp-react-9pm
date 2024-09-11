import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Account() {

    const [data,setData]=useState([])
    useEffect(()=>{

        let d =localStorage.getItem("token");
        axios.get("http://localhost:4000/accounts",{
            headers :{
                'Authorization' : `Bearer ${d}`,

            }
        })
        .then(y=>{
            console.log(y.data)
            setData(y.data); 
        })

    },[])

  return (
    <div>Account</div>
  )
}
