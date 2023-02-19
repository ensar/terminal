import { Grid, Modal } from '@mui/material';
import Form from './Form';
import Header from './Header';

const SaveDefect = ({ open, setOpen }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Grid
        container
        xs={11}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'main.green',
          border: 'none',
          borderRadius: '8px',
          padding: '10px',
        }}
      >
        <Header />
        <Form setOpen={setOpen} />
      </Grid>
    </Modal>
  );
};

export default SaveDefect;
