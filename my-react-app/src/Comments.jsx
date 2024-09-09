import React,{useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';

export const Comments = () => {

   const [data,setData]= useState([]);

   useEffect(()=>{
 fetch("https://jsonplaceholder.typicode.com/comments").then(y=>y.json()).then(y=>{
    setData(y);
 })
 } , [])

   const columns = [
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'body', headerName: 'Body', width: 150 },

  ];
  return (
  
    <DataGrid rows={data} columns={columns}>
        
    </DataGrid>
  )
}
