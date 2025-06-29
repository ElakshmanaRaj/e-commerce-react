import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import ProductDetails from './ProductDetails';

const ProductLayout = () => {
  return (
    <Box>
        <Header/>
        <ProductDetails/>
    </Box>
  )
}

export default ProductLayout;