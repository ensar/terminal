import { Button, FormGroup, Grid, TextField, Typography } from '@mui/material';
import CheckBox from 'components/FormItems/CheckBox';
import { useDefectEntryContext } from 'contexts/DefectEntryContext';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SaveDefect from './SaveDefect';

const Sidebar = () => {
  const { assyNo, defect } = useDefectEntryContext();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <Grid item xs={3} sx={{ padding: '5px' }}>
      <FormGroup
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
      >
        <CheckBox label='Harigami' />
        <CheckBox label='RDD' />
      </FormGroup>
      <Button variant='outlined' sx={buttonStyles} disabled>
        {t('defectEntry.btn1')}
      </Button>
      <Button variant='outlined' sx={buttonStyles} disabled>
        {t('defectEntry.btn2')}
      </Button>
      <Button
        variant='outlined'
        sx={buttonStyles}
        disabled={!Boolean(defect)}
        onClick={() => setOpen(true)}
      >
        {t('defectEntry.btn3')}
      </Button>
      <SaveDefect open={open} setOpen={setOpen} />
      <Typography variant='h6' color={'black'} textAlign={'center'}>
        {t('defectEntry.assy').toUpperCase()}
      </Typography>
      <TextField
        sx={{
          width: '100%',
          backgroundColor: '#fff',
          '& input': {
            padding: '2px 10px',
            fontSize: '35px',
          },
        }}
        value={assyNo || ''}
      />
      <Button variant='outlined' sx={buttonStyles}>
        {t('defectEntry.btn4')}
      </Button>
      <Button variant='outlined' sx={buttonStyles}>
        {t('defectEntry.btn5')}
      </Button>
      <Button variant='outlined' sx={buttonStyles}>
        {t('defectEntry.btn6')}
      </Button>
      <Button variant='outlined' sx={buttonStyles}>
        MANİFEST
      </Button>
    </Grid>
  );
};

export default Sidebar;
const buttonStyles = {
  width: '100%',
  height: '55px',
  marginBlock: '2px',
  color: '#000',
  border: '1px solid',
  fontWeight: '600',
  '&:hover': {
    border: '1px solid',
  },
};
