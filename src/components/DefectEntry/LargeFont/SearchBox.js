import { Box, Button, Grid, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SearchBox = ({ assyNo, setOpen }) => {
  const { t } = useTranslation();
  return (
    <Grid item xs={2}>
      <Box
        sx={{
          width: '100%',
          padding: '5px',
          border: '1px solid #ddd',
          backgroundColor: 'main.green',
        }}
      >
        <Button
          variant='contained'
          color='error'
          sx={{ height: '55px' }}
          fullWidth
          onClick={() => setOpen(false)}
        >
          {t('defectEntry.btn15')}
        </Button>
        <TextField
          sx={{
            width: '100%',
            backgroundColor: '#fff',
            marginTop: '40px',
            '& input': {
              padding: '2px 10px',
              fontSize: '35px',
            },
          }}
          value={assyNo || ''}
        />
        <Button
          variant='outlined'
          sx={{
            height: '55px',
            color: '#000',
            border: '1px solid',
            fontWeight: '600',
            '&:hover': {
              border: '1px solid',
            },
          }}
          fullWidth
        >
          {t('defectEntry.btn4')}
        </Button>
      </Box>
    </Grid>
  );
};

export default SearchBox;
