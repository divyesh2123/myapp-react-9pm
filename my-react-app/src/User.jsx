import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

export const User = () => {

    const [data,setData]= useState([]);
    const   [page,setpage]            =useState(5)

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(y=>y.json())
        .then(y=>{
            setData(y);
        })

    },[])

    const columns = [
        { field: 'username', headerName: 'User Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
      ];
  return (
    <div>

        <DataGrid
        rows={data}
        columns={columns}
        pageSize={page}
        onPageSizeChange={(newPageSize) => setpage(newPageSize)}
        pagination
        rowsPerPageOptions={[5, 10, 20]}
        ></DataGrid>
    </div>
  )
}
