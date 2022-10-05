import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import img from "../Asset/project1.jpg"

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Cindy Baker" src={img} />
          <Avatar alt="Cindy Baker" src={img} />
          <Avatar alt="Cindy Baker" src={img} />
          <Avatar alt="Cindy Baker" src={img} />
          <Avatar alt="Cindy Baker" src={img} />
          <Avatar alt="Cindy Baker" src={img} />
          <Avatar alt="Cindy Baker" src={img} />
          <Avatar alt="Cindy Baker" src={img} />
          <Avatar alt="Cindy Baker" src={img} />
        </AvatarGroup>
        <Typography >
          Leatest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100}>
          <ImageListItem>
            <img src={img} alt="img" />
          </ImageListItem>
          <ImageListItem>
            <img src={img} alt="img" />
          </ImageListItem>
          <ImageListItem>
            <img src={img} alt="img" />
          </ImageListItem>
          <ImageListItem>
            <img src={img} alt="img" />
          </ImageListItem>
        </ImageList>

        {/* lest items */}
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>


      </Box>

    </Box>
  );
};

export default Rightbar;