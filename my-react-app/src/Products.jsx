import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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

            return ( <Grid item xs={4}>   <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar  aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={value.title}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={value.thumbnail}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {value.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  
                </CardActions>
              
              </Card>  </Grid>)

        })
        
    }</Grid>
  )
}
