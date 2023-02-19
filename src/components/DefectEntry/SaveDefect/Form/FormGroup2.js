import { useEffect, useState } from 'react';
import { Button, Grid, MenuItem, Select } from '@mui/material';
import CheckBox from 'components/FormItems/CheckBox';
import { getnrReason } from 'services/api';
import { useTranslation } from 'react-i18next';

const FormGroup2 = ({ formik, setOpen }) => {
  const [data, setData] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const res = await getnrReason();
      setData(res);
    })();
  }, []);

  return (
    <Grid
      container
      xs={6}
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        height: '120px',
      }}
    >
      <Grid item xs={6}>
        <CheckBox label='Harigami' onChange={formik.handleChange} />
      </Grid>
      <Grid item xs={6}>
        <Select
          name='nrReason'
          fullWidth
          defaultValue={''}
          onChange={formik.handleChange}
        >
          {data &&
            data.map((r) => {
              return (
                <MenuItem key={r.nrId} value={r.nrReasonDetail}>
                  {r.nrReasonDetail}
                </MenuItem>
              );
            })}
        </Select>
      </Grid>
      <Grid item xs={5}>
        <Button type='submit' variant='contained' color='error' fullWidth>
          {t('defectEntry.btn13')}
        </Button>
      </Grid>
      <Grid item xs={5}>
        <Button
          variant='contained'
          color='error'
          fullWidth
          onClick={() => setOpen(false)}
        >
          {t('defectEntry.btn14')}
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormGroup2;
