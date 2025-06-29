import React, { useContext } from 'react';
import { Box, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { CategoryContext } from '../context/Category';
import useFetch from '../hooks/useFetch';

const MobileSidebar = () => {
  const { data: categories } = useFetch('https://fakestoreapi.com/products/categories');
  const { category, setCategory, sortOrder, setSortOrder } = useContext(CategoryContext);

  return (
    <Box
      sx={{
        position: 'fixed',
        top:63,
        left: 0,
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        zIndex: 999,
      }}
    >
      <Container
        sx={{
          padding: '10px 25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap:1,
          marginTop:"5px",
        }}
      >
        <FormControl sx={{ minWidth: 150 }}  size="small">
          <InputLabel id="mobile-category-label" sx={{ color: '#000' }}>Category</InputLabel>
          <Select
            labelId="mobile-category-label"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
            sx={{
              color: '#000',
              '.MuiOutlinedInput-notchedOutline': { borderColor: '#dedede' },
            }}
          >
            <MenuItem value="all">All</MenuItem>
            {categories &&
              categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel id="mobile-price-label" sx={{ color: '#000' }}>Sort by Price</InputLabel>
          <Select
            labelId="mobile-price-label"
            value={sortOrder}
            label="Sort by Price"
            onChange={(e) => setSortOrder(e.target.value)}
            sx={{
              color: '#000',
              '.MuiOutlinedInput-notchedOutline': { borderColor: '#dedede' },
            }}
          >
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="low">Low to High</MenuItem>
            <MenuItem value="high">High to Low</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </Box>
  );
};

export default MobileSidebar;
