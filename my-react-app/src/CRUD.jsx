import React, { useState } from 'react'
import DisplayGrid from './DisplayGrid'
import HForm from './HForm'
import { Button } from '@mui/material'

export default function CRUD() {
    
    const [open,setOpen]= useState(false);

    const openDialog= ()=>{
        setOpen(true)
    }

    const closeDialor = ()=>{
        setOpen(false)
    }
  return (
    <div>
        <Button onClick={openDialog}>Add Employee</Button>
        
        <DisplayGrid/>
        <HForm open={open} closeDialor={closeDialor}/>
    </div>
  )
}
