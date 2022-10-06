import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Checkbox, Container, createTheme, CssBaseline, FormControlLabel, TextField, ThemeProvider, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react';

const theme = createTheme();

const SingUp = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined/>
        </Avatar>
        <Typography component="h1" variant="h5" >
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

        <TextField
            margin="normal"
            required
            fullWidth
            id="fName"
            label="First Name"
            name="fName"
            autoComplete="name"
            autoFocus
          />

        <TextField
            margin="normal"
            required
            fullWidth
            id="lName"
            label="Last Name"
            name="lName"
            autoComplete="name"
            autoFocus
          />


          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="agree" color="primary" />}
            label="I Agree"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,bgcolor:green[500]}}
            
          >
            Sign Up Account
          </Button>
        </Box>
      </Box>
    </Container>
  </ThemeProvider> 
  );
};

export default SingUp;