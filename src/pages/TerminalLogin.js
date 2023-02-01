import { Grid, Typography } from '@mui/material';
import LoginForm from 'components/LoginForm';

const TerminalLogin = () => {
  return (
    <Grid
      container
      xs={8}
      sx={{
        marginInline: 'auto',
        border: '2px solid',
        borderColor: 'main.darkGreen',
        borderRadius: '8px',
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          textAlign: 'center',
          borderBottom: '2px solid',
          borderColor: 'main.darkGreen',
        }}
      >
        <Typography variant='h4' sx={{ color: 'main.darkRed' }}>
          CVQS (TMTT)
        </Typography>
      </Grid>
      <LoginForm />
    </Grid>
  );
};

export default TerminalLogin;
