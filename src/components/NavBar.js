
import { Mail, NotificationAdd, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge,  InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { styled, } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "30%"
}))

const Icons = styled("div")(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  }
}))

const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  }
}))


const NavBar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky' style={{ backgroundColor: "green" }}>
      <StyledToolbar>
        <Typography
          variant='h6'
          sx={{ display: { xs: "none", sm: "block", } }}
        >
          Solyman
        </Typography>
        <Pets
          sx={{ display: { xs: "block", sm: "none", } }}
        />
        <Search><InputBase placeholder='Search here' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationAdd />
          </Badge>
          <Avatar sx={{ height: 30, width: 30 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg"
            onClick={e => setOpen(true)}
          />
        </Icons>

        <UserBox>
          <Avatar sx={{ height: 30, width: 30 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg"
            onClick={e => setOpen(true)}
          />
          <Typography variant='span'>solyman</Typography>
        </UserBox>

       {/* menu */}
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"

          open={open}
          onClose={e => setOpen(false)}

          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem as={Link} to='/profile' >Profile</MenuItem>
          <MenuItem as={Link} to='/account'>My account</MenuItem>
          <MenuItem as={Link} to='/logout'>Logout</MenuItem>
        </Menu>

      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;