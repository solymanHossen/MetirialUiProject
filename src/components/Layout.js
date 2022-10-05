
import { Box, Stack } from '@mui/system';
import React from 'react';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Stack direction="row"
        spacing={2}
        // gap={2}
        justifyContent="space-between"
      >
        <Sidebar />
        {children}
      </Stack>
    </Box>

  );
};

export default Layout;