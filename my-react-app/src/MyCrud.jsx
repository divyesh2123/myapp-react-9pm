import React, { useReducer, useState } from 'react'

export default function MyCrud() {

    const handleReducerInfo = (state,action)=>{

        switch(action.type)
        {
            case 'ADD':
                let p =[...state];
                p.push(action.payload);
                return p;
            case "Remove":
                let p2 =[...state];
                p2.splice(action.payload,1);
                return p2;

            
        }

    }
    const [input,setInput]= useState({
        firstName :"",
        lastName :""
    });
    const [data,setData]= useReducer(handleReducerInfo,[]);
    

   

    const handleChange = (e)=>{

        setInput({...input,[e.target.name]:e.target.value});
    }

    const handleSave = ()=>{
        
        setData({type:"ADD",payload:input});
    }

    console.log(data)
   
  return (
    <div>

            <input type='text' name="firstName" onChange={handleChange}/>
            <input type='text' name="lastName" onChange={handleChange}/>
            <input type='submit' value="save" onClick={handleSave}/>
            {
                data.map((a,b)=>{

                    return (<div>{a.firstName} {a.lastName} 
                    <button onClick={()=>{
                  setData({type:"Remove",payload:b});

                    }}>Delete</button>
                    </div>)
                })

            }

    </div>
  )
}
