import React, { useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Alert, Box, Button, Container, Grid, Typography, Fab } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import CurrencyRupee from '@mui/icons-material/CurrencyRupeeRounded'


const ProductDetails = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const {data: product, error} = useFetch(`https://fakestoreapi.com/products/${id}`)
    
    if(error){

        return(
            <Container>
                <Alert severity='error' sx={{textAlign:"center"}}>
                    {error}
                </Alert>
            </Container>
        );
    }

    // Product Title
    useEffect(()=>{
        document.title=`${product.title}`
    });
    
  return (
   <>

   <Container sx={{p:2}}>

    <Button variant='outlined' color='secondary'  startIcon={<ArrowBack/>} sx={{mb:3}}
       onClick={()=>navigate(-1)}>
        Back
    </Button>

    <Grid container spacing={3} mt={3}   >

    {/* Product Image Section */}
    <Grid item size={{xs:12, md:4}} >
        <Box sx={{display:{xs: 'flex', md:'block'},justifyContent:{xs: 'center', md:'flex-start'}}}>
            <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
            />
        </Box>
    </Grid>

    {/* Product Details Section */}
    <Grid item size={{xs:12, md:8}} >

        <Box sx={{ padding: 2 }}>
            <Typography variant='h6' gutterBottom sx={{lineHeight:"1.4", fontSize:"25px"}} >
                {product.title}
            </Typography>

            <Fab variant="extended" size="small" color="secondary" sx={{mt:1, zIndex:100}}>
                <CurrencyRupee />
                {Math.round(product.price)}
            </Fab>

            <Typography variant='body1' sx={{ mt: 2, lineHeight:"1.6" }}>
                {product.description}
            </Typography>

            <Typography variant='body2' sx={{ textTransform: "capitalize", mt: 1, color:"secondary.main" }}>
                Category: {product.category}
            </Typography>
        </Box>
    </Grid>

</Grid>

   </Container>
   </>
  )
}

export default ProductDetails;