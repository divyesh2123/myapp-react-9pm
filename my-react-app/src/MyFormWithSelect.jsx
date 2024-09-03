import React, { useState } from 'react'

export default function MyFormWithSelect() {

    const [form,setform]= useState({
        title : "",
        firstName: "",
        lastName:"",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false
    });

    const handleChange = (e)=>{
        if(e.target.type =="checkbox")
        {
            setform({...form,[e.target.name]:e.target.checked})
        }
        else
        {
            setform({...form,[e.target.name]:e.target.value})  
        }
       
    }

    const handleSubmit = (e)=>{

        
        e.preventDefault();
        
        fetch("http://localhost:4000/accounts/register",{
            method : "POST",
            body: JSON.stringify(form),
            headers : {
                'Content-Type':"application/json"
            }
        }).then(y=>y.json())
        .then(y=>{
            console.log(y);
        })

    }
  return (
    <div>
            <form onSubmit={handleSubmit}>

               <select name="title" onChange={handleChange}>
                    <option>Mr</option>
                    <option>Miss</option>
                    <option>Mrs</option>
               </select>

               <input type='text' name="firstName" onChange={handleChange}/>
               <input type='text' name="lastName" onChange={handleChange}/>
               <input type='text' name="email" onChange={handleChange}/>
               <input type='password' name="password" onChange={handleChange}/>
               <input type='password' name="confirmPassword" onChange={handleChange}/>
                <input type='checkbox' name="acceptTerms" onChange={handleChange}/>
           
            <input type='submit' value="save"/>
            </form>

    </div>
  )
}
