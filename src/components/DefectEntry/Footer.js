import { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useDefectEntryContext } from 'contexts/DefectEntryContext';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LargeFont from './LargeFont';

const Footer = () => {
  const { defect, labelText } = useDefectEntryContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid container xs={12} sx={{ padding: '10px 5px' }}>
        <Grid item xs={9}>
          <Button variant='outlined' sx={buttonStyles}>
            {t('defectEntry.btn7')}
          </Button>
          <Button variant='outlined' sx={buttonStyles}>
            {t('defectEntry.btn8')}
          </Button>
          <Button variant='outlined' sx={buttonStyles}>
            {t('defectEntry.btn9')}
          </Button>
          <Button
            variant='outlined'
            sx={buttonStyles}
            onClick={() => navigate('/terminal/defects')}
          >
            {t('defectEntry.btn10')}
          </Button>
          <Button variant='outlined' sx={buttonStyles}>
            {t('defectEntry.btn11')}
          </Button>
          <Button
            variant='outlined'
            sx={buttonStyles}
            onClick={() => setOpen(true)}
          >
            {t('defectEntry.btn12')}
          </Button>
          <LargeFont open={open} setOpen={setOpen} />
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
            {t('defectEntry.support')}
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
