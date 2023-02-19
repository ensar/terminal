import { Grid, Typography } from '@mui/material';
import CheckBox from 'components/FormItems/CheckBox';

const Header = () => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant='h6' fontWeight={'600'} color='black'>
        CVQS (TMMT)
      </Typography>
      <CheckBox label='SIK GELEN HATA' />
    </Grid>
  );
};

export default Header;
