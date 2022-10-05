
import { createTheme, ThemeProvider } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useState } from 'react';

import Feed from './Feed';
import NavBar from './NavBar';

import Sidebar from './Sidebar';

const Home = () => {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (

    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row"
          spacing={2}
          justifyContent="space-between"
        >
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
        </Stack>


      </Box>
    </ThemeProvider>





  );
};

export default Home;