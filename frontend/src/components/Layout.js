import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header1 from './Header1/Header1'
import Footer1 from './Footer1/Footer1'



export default function Layout(){
    return(
        <Box display="flex" flexDirection={'column'} >
        <Header1 />
            <Outlet />
        <Footer1 />
        </Box>
    )
}