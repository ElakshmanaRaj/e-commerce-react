import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { CategoryContext } from "../context/Category";
import { Box, Container, Typography, Select, MenuItem, FormControl, InputLabel, Alert } from "@mui/material";

const Sidebar = () => {
  
  const { data: categories, error } = useFetch("https://fakestoreapi.com/products/categories");

  const { category, setCategory, sortOrder, setSortOrder } = useContext(CategoryContext);

  return (

    <Box
      sx={{
        boxShadow:"0px 0px 10px rgba(0,0,0, 0.1)",
        minHeight:"100vh"
      }}
    >
      <Container >
        <Typography variant="h6" py={2}>
          Apply Filters
        </Typography>

        <Typography variant="subtitle1" mt={1}>
          Categories
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mt: 1 }}>
            {error}
          </Alert>
        )}

        {/* Categories Event */}

        <FormControl fullWidth sx={{ mt: 2 }} size="small">

          <InputLabel sx={{ color: "#000" }}>Select Category</InputLabel>

          <Select
            value={category}
            label="Select Category"
            onChange={(e) => setCategory(e.target.value)}
            sx={{
              color: "#000",
              ".MuiOutlinedInput-notchedOutline": { borderColor: "#dedede" }
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


        {/* Sorting Event */}

        <Typography variant="subtitle1" mt={4}>
          Sort by Price
        </Typography>

        <FormControl fullWidth sx={{ mt: 2 }} size="small">

          <InputLabel sx={{ color: "#000" }}>Sort Order</InputLabel>

          <Select
            value={sortOrder}
            label="Sort Order"
            onChange={(e) => setSortOrder(e.target.value)}
            sx={{
              color: "#000",
              ".MuiOutlinedInput-notchedOutline": { borderColor: "#dedede" },
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

export default Sidebar;
