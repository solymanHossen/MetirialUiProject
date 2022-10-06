// import { Email, Facebook, LinkedIn, Phone, RoomServiceOutlined, Twitter, WebAsset } from '@mui/icons-material';
// import { Avatar, Box, Container, Grid, IconButton,   makeStyles,   Typography } from '@mui/material';
import React from 'react';
import Layout from './Layout';



// const useStyles = makeStyles((theme) => ({
//   iconWrapper: {
//     backgroundColor: theme.palette.background.emphasis,
//   },
//   midColumn: {
//     [theme.breakpoints.up('md')]: {
//       paddingLeft: theme.spacing(4)
//     }
//   }
// }));


const Contact = () => {
  // const classes = useStyles();
  // const content = {
  //   'header': 'Lorem ipsum dolor sit amet',
  //   'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat.',
  //   'contact1': 'Address',
  //   'contact1-desc1': '1652 Cordia Cir',
  //   'contact1-desc2': ' Newton, North Carolina(NC), 28658',
  //   'contact2': 'Email',
  //   'contact2-desc': 'hello@mui.dev',
  //   'contact3': 'Social Media',
  //   'contact4': 'Phone',
  //   'contact4-desc': '(318) 285-9856',
   
  
  // };
 
  return (
    <Layout>
        {/* <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" component="h2" gutterBottom={true}>{content['header']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.midColumn}>
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <RoomServiceOutlined color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc1']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact1-desc2']}</Typography>
                  </Box>
                </Box>
                <Box display="flex">
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <Email color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                    <Typography variant="body2" color="textSecondary">{content['contact2-desc']}</Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" mb={3}>
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <WebAsset color="primary" fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact3']}</Typography>
                  <IconButton href="#" color="inherit">
                    <Facebook />
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <Twitter/>
                  </IconButton>
                  <IconButton href="#" color="inherit">
                    <LinkedIn />
                  </IconButton>
                </Box>
              </Box>
              <Box display="flex">
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <Phone color="primary" fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact4']}</Typography>
                  <Typography variant="body2" color="textSecondary">{content['contact4-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section> */}
    contact
    </Layout>
   
  );
};

export default Contact;

