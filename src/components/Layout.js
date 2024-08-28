import React from 'react';
import Nav from './Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Layout(){
    return(
        <Box display="flex" flexDirection={'column'} >
        <Nav />
            <Outlet />
        
        </Box>
    )
}