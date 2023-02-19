import { Box, Button, Grid, Typography } from '@mui/material';
import { useDefectEntryContext } from 'contexts/DefectEntryContext';

const Footer = () => {
  const { defect, labelText } = useDefectEntryContext();
  return (
    <>
      <Grid container xs={12} sx={{ padding: '10px 5px' }}>
        <Grid item xs={9}>
          <Button variant='outlined' sx={buttonStyles}>
            ÇIKIŞ
          </Button>
          <Button variant='outlined' sx={buttonStyles}>
            MODEL İLK RESMİ
          </Button>
          <Button variant='outlined' sx={buttonStyles}>
            GERİ
          </Button>
          <Button variant='outlined' sx={buttonStyles}>
            HATA LİSTESİ
          </Button>
          <Button variant='outlined' sx={buttonStyles}>
            TEMİZLE
          </Button>
          <Button variant='outlined' sx={buttonStyles}>
            BÜYÜK FONT
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant='h6'
            sx={{ fontWeight: '600', color: '#000', textAlign: 'center' }}
          >
            {defect}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography variant='h6' fontWeight={'600'} color='black'>
          {labelText}
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography
            variant='body2'
            sx={{ color: 'main.darkRed', marginRight: '5px' }}
          >
            TEKNİK DESTEK
          </Typography>
          <Typography variant='body2'>CVQS (TMTT)</Typography>
        </Box>
      </Grid>
    </>
  );
};

export default Footer;

const buttonStyles = {
  width: '120px',
  height: '55px',
  marginInline: '2px',
  color: '#000',
  border: '1px solid',
  fontWeight: '600',
  '&:hover': {
    border: '1px solid',
  },
};
