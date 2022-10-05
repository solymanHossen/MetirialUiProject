
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material"
import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';


const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);

  const matches = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{
        position: "fixed",
        bottom: 20,
        left: `${matches ? "calc(50% - 25px)" : ""}`
      }} >
        <Fab color="primary" aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>


      <Modal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >

        <Box width={400}
          height={240}
         
          p={3}
          borderRadius={5}

          bgcolor={"background.default"}
          color={"text.primary"}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'


          }} >

          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              solyman
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box >

      </Modal>
    </>
  );
};

export default Add;