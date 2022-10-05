
import { Box, Fab, Modal, Tooltip, Typography } from '@mui/material';
import { Add as AddIcon } from "@mui/icons-material"
import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';


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

        <Box width={400} height={240} bgcolor="white" p={3} borderRadius={5} style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: "flex", alignItems: "center",
          justifyContent: "center"
        }} >

          <Typography >This is the modal</Typography>
        </Box >

      </Modal>
    </>
  );
};

export default Add;