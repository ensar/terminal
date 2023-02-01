import { FormControl, Grid, MenuItem, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getShifts } from 'services/api';
import { calculateLastDateOfMonth } from 'utils/date';

const Shift = ({ formik }) => {
  const { t } = useTranslation();
  const [shifts, setShifts] = useState([]);
  const [selectedShift, setSelectedShift] = useState();
  const initialShiftValues = formik.values['shift'];

  useEffect(() => {
    (async () => {
      const res = await getShifts();
      setShifts(res.data);
    })();
  }, []);

  useEffect(() => {
    calculateLastDateOfMonth(
      initialShiftValues['year'],
      initialShiftValues['month']
    );
  }, [initialShiftValues]);

  useEffect(() => {
    const selected = shifts?.find(
      (s) => s.shiftCode === initialShiftValues['shiftCode']
    );
    setSelectedShift(selected);
  }, [initialShiftValues, shifts]);

  const setValue = (e) => {
    formik.setFieldValue('shift', {
      ...formik.values['shift'],
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        direction: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: `${selectedShift?.rgbColor}`,
        borderRadius: '8px',
        padding: '10px',
        flexWrap: 'wrap',
      }}
    >
      <Typography variant='body1'>{t('form.shiftLabel1')}</Typography>
      <Box sx={{ display: 'flex', gap: '5px' }}>
        <FormControl sx={{ minWidth: 60 }}>
          <Select
            name='day'
            value={initialShiftValues['day']}
            onChange={(e) => setValue(e)}
          >
            {[
              ...Array(
                calculateLastDateOfMonth(
                  initialShiftValues['year'],
                  initialShiftValues['month']
                )
              ).keys(),
            ].map((i) => {
              return (
                <MenuItem key={i} value={i + 1}>
                  {i + 1}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 60 }}>
          <Select
            name='month'
            value={initialShiftValues['month']}
            onChange={(e) => setValue(e)}
          >
            {[...Array(12).keys()].map((i) => {
              return (
                <MenuItem key={i} value={i + 1}>
                  {i + 1}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 80 }}>
          <Select
            name='year'
            value={initialShiftValues['year']}
            onChange={(e) => setValue(e)}
          >
            <MenuItem value={2023}>2023</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Typography variant='body1' sx={{ color: '#000', fontWeight: 500 }}>
        {t('form.shiftLabel2')}
      </Typography>
      <FormControl
        sx={{
          minWidth: 80,
        }}
      >
        <Select
          name='shiftCode'
          value={initialShiftValues['shiftCode']}
          onChange={(e) => setValue(e)}
        >
          {shifts &&
            shifts.map((shift) => {
              return (
                <MenuItem key={shift.shiftId} value={shift.shiftCode}>
                  {shift.shiftCode}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default Shift;
