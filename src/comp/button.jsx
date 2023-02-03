import React from 'react'
import { Button, Grid } from '@mui/material'
const Option = (props) => {
    const {data,val} = props;
    console.log(data)
  return (
    <div>
        <Grid container spacing={3} sx={{p:{md:'0px 55px',sm:'0px 55px',xs:'0px 0px'}}}>
        {data && Array.isArray(data) && data.length > 0 ? data.map( (x,i)=>{
            return(
                <Grid sx={{width:'100%'}} item md={6} sx={6}  sx={12}>

                <Button variant='contained' onClick={() => val(x)}  sx={{width:'100%'}} key={i}>{x}</Button>
                </Grid>
            )
        }) :null }
        </Grid>
    </div>
  )
}

export default Option
