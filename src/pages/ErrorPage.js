import { Button, Grid, Typography } from '@mui/material';
import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Grid
      container
      xs={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        marginInline: 'auto',
      }}
    >
      <Typography variant='h4' color={'main.darkRed'}>
        Oops!
      </Typography>
      <Typography variant='body1' marginY={'10px'}>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant='body2'>
        <i>{error.statusText || error.message}</i>
      </Typography>
      <Button LinkComponent={Link} to='/' variant='contained' color='success'>
        BACK TO HOME
      </Button>
    </Grid>
  );
}
