import { Add } from '@mui/icons-material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from './Feed';
import NavBar from './NavBar';
import Profile from './Profile';
import Sidebar from './Sidebar';

const Home = () => {
  return (
    
    <>
      <Box>
       <NavBar />
      <Stack direction="row"
        spacing={2}
        // gap={2}
        justifyContent="space-between"
      >
        <Sidebar />
        <Feed/>
      </Stack>

     
    </Box>

    </>
 

    
  );
};

export default Home;