import React, { useState } from 'react'
import  axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function HLogin() {

    const [form,setform]=useState({
        email:"",
        password:""
    });

    const nav= useNavigate();

    const handle =(e)=>{
        setform({...form,[e.target.name]:e.target.value});

    }

    const handlesubmit =(e)=>{

        e.preventDefault();

        axios.post("http://localhost:4000/accounts/authenticate",form)
        .then(y=>{

            localStorage.setItem("token",y.data.jwtToken);
            nav("/ac");
        }).catch(y=>{

        }).finally(y={
            
        })


    }
  return (
    <div>
        <form onSubmit={handlesubmit}>

            <input type='text' name="email" onChange={handle}/>
            <input type='text' name='password' onChange={handle}/>

            <input type='submit' value="save"/>
        </form>
    </div>
  )
}
