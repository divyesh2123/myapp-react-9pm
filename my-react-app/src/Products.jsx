import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProductItem from './ProductItem';
export default function Products() {

    const [data,setData]= useState([]);

    useEffect(()=>
    {
        fetch("https://dummyjson.com/products")
        .then(y=>y.json())
        .then(y=>{
            setData(y.products)
        })

    },[])
  return (
    <Grid container spacing={2}>
    {
        data.map(function(value,index)
        {

            return (<>
            <ProductItem data={value} index={index}></ProductItem>
            </> )

        })
        
    }</Grid>
  )
}
