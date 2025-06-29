import React from 'react';
import "../App.css";
import { Box, useMediaQuery } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import MobileSidebar from '../components/MobileSidebar';



const MainLayout = () => {

  const location = useLocation();
  const mobileView = useMediaQuery("(max-width: 600px)");

    
  return (
    
    <Box>
        <Header/>
        <Box sx={{display:"flex"}}>

            <Box className="sidebar">
                <Sidebar/>
            </Box>

            <Box className="product-list" key={location.key}>
             <Outlet/>
            </Box>

            {/* Mobile Sidebar */}
            {mobileView && <MobileSidebar/>}
            
        </Box>
    </Box>
  )
}

export default MainLayout;