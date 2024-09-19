import { Button } from '@mui/material';
import { width } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

export default function DisplayGrid(props) {

  

  const {data,removeArray,editRow} = props;

  const c = [
  {
    field: 'firstName',
    headerName:"First Name"
  },
  {
    field: 'lastName',
    headerName:"Last Name" 
  },
  {
    headerName : "",
    field:'id',
    width:300,
    renderCell : (props)=>{

      console.log(props);

      return(<div>

        <Button onClick={()=>{editRow(props.row.id)}}  >Edit</Button>
        <Button onClick={()=>{ removeArray(props.row.id)}}>Delete</Button>
      
      </div>)

    }
  }

]
  const p = React.useMemo(()=>{

    return [
      {
        field: 'firstName',
        headerName:"First Name"
      },
      {
        field: 'lastName',
        headerName:"Last Name" 
      },
      {
        headerName : "",
        field:'id',
        width:300,
        renderCell : (props)=>{
    
          console.log(props);
    
          return(<div>
    
            <Button onClick={()=>{editRow(props.row.id)}}  >Edit</Button>
            <Button onClick={()=>{ removeArray(props.row.id)}}>Delete</Button>
          
          </div>)
    
        }
      }
    
    ]
  })

  console.log(data);
  return (
     <DataGrid
      rows={data}
      columns={p}
     >DisplayGrid</DataGrid>
  )
}
