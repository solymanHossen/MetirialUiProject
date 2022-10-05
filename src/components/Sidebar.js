import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { SettingsInputComponent } from '@mui/icons-material';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from 'react-router-dom';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';




const Sidebar = ({ mode, setMode }) => {

  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <List>
          {/* <Link to="/profile"> */}

          <ListItem disablePadding>
            <ListItemButton as={Link} to='/'>
              <ListItemIcon>
                <HomeWorkIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton as={Link} to='/profile'>
              <ListItemIcon>
                <ManageAccountsIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          {/* </Link> */}
          <ListItem disablePadding>
            <ListItemButton as={Link} to='/contact'>
              <ListItemIcon>
                <ContactsIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton as={Link} to='/setting'>
              <ListItemIcon>
                <SettingsInputComponent />
              </ListItemIcon>
              <ListItemText primary="setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>

  );
};

export default Sidebar;