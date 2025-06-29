import React, { useContext } from "react";
import { Box, Container, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../context/Category";

const Header = () => {
  const navigate = useNavigate();
  const { search, setSearch } = useContext(CategoryContext);

  // Search Function

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search/${search.trim()}`);
      setSearch("");
    }
  };

  const keyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "secondary.main",
          p: 2,
          position: "sticky",
          top: 0,
          zIndex: "999",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap:1,
          }}
        >
          <Typography
            variant="h6"
            onClick={() => navigate("/")}
            sx={{
              color: "#fff",
              fontSize: { xs: "20px", md: "24px" },
              cursor: "pointer",
            }}
          >
            Shophub
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 1,
              paddingX: 1,
              width: { xs: "50%", md: "40%" },
            }}
          >
            <SearchIcon sx={{ marginRight: 1, color: "gray" }} />
            <InputBase
              placeholder="Search products..."
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={keyDown}
              sx={{
                fontSize: { xs: '0.8rem', md: '1rem' },
                px: { xs: 1, md: 2 },
                "&::placeholder": {
                  fontSize: { xs: "0.6rem", md: "1rem" },
                },
              }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Header;
