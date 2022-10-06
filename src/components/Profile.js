import { Box } from '@mui/material';
import React from 'react';
import SingIn from '../Page/SingIn';
import SingUp from '../Page/SingUp';
import Layout from './Layout';

const Profile = () => {
const isLogdin=false
  return (
    <Layout>
      <Box sx={{
        position: "absolute",
        left: "calc(50% - 200px)",
        marginLeft: "0px"
      }}>
        {
          isLogdin? <SingIn />:  <SingUp/>
        }  
      </Box>
    </Layout>
  );
};

export default Profile;