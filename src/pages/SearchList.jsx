import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CategoryContext } from '../context/Category';
import useFetch from '../hooks/useFetch';
import { Alert, Button, Container, Grid, Typography, Card, Box, Fab, IconButton } from '@mui/material';
import CurrencyRupee from '@mui/icons-material/CurrencyRupeeRounded';
import Home from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'



const SearchList = () => {

    const { query } = useParams();
    const navigate = useNavigate();
    const { category,  sortOrder, favorites, setFavorites } = useContext(CategoryContext);
    const {data: products, error} = useFetch("https://fakestoreapi.com/products");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        let updatedProducts = [...products];
    
        // Search Filtering
        if (query) {
            updatedProducts = updatedProducts.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
        }
    
        // Category Filtering
        if (category !== "all") {
            updatedProducts = updatedProducts.filter(product => product.category === category);
        }
    
        // Sort Price Order Filtering
        if (sortOrder === "low") {
            updatedProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "high") {
            updatedProducts.sort((a, b) => b.price - a.price);
        }
    
        setFilteredProducts(updatedProducts);
    
    }, [products, query, category, sortOrder]);


    
  // Toggle Favorite Status

  const toggleFavorite = (productId)=>{

    if(favorites.includes(productId)){
      setFavorites(favorites.filter(id => id !== productId));
    } else{
      setFavorites([...favorites, productId])
    }

  }


  // Error Message

    if(error){

        return(

            <Container sx={{mt:5}}>
                <Alert severity='error' sx={{textAlign:"center"}}>
                    {error}
                </Alert>
            </Container>

        )
    }
  return (

    <>
    <Container>
        <Button variant='outlined' color='secondary' startIcon={<Home/>} onClick={()=>navigate('/')} sx={{mt:{xs:3, md:2}}}>
            Back to home
        </Button>
        <Typography variant='h6' gutterBottom mt={3}>
            Search Results for: {query}
        </Typography>

        {/* Search results showing  */}
        <Grid container spacing={3} mt={2}>
        {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (

            <Grid item size={{xs: 12, md:6, lg:4}} key={product.id}>
            <Card className="card" title={product.title} sx={{position:"relative"}}>
              
              <img src={product.image} alt={product.title} />
               
              <IconButton color="error" onClick={()=>toggleFavorite(product.id)} sx={{position:"absolute"}}>
                {favorites.includes(product.id) ? <FavoriteIcon/> : <FavoriteBorderIcon/> }
              </IconButton>

              <Box>

                <Typography
                  className="text-overflow"
                  variant="h6"
                  sx={{ padding: "4px", fontSize:"18px" }}
                >
                  {product.title}
                </Typography>

                <Fab variant="extended" size="small" color="secondary" sx={{mt:1, zIndex:100}}>
                <CurrencyRupee />
                {Math.round(product.price)}
                </Fab>

                <Typography
                  variant="body2"
                  sx={{ textTransform: "capitalize", mt:2 }}
                >
                  {product.category}
                </Typography>

                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ mt: 2 }}
                  onClick={()=>navigate(`/product/${product.id}`)}
                >
                  View Product
                </Button>
              </Box>

            </Card>

          </Grid>
        ))
    ) : (
        <Alert severity='error' variant='standard'>
            No Products Found
        </Alert>
    )}
        </Grid>
    </Container>
    </>

  )
}

export default SearchList;