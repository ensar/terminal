import { Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getFilters } from 'services/api';
import SelectItem from './SelectItem';

const FormItem = ({ item, formik }) => {
  const [filters, setFilters] = useState();
  const { name } = item;

  useEffect(() => {
    (async () => {
      const res = await getFilters();
      setFilters(res.data);
    })();
  }, []);
  return (
    <>
      <Grid item xs={4}>
        <Typography variant='body1' sx={{ color: '#000', fontWeight: 500 }}>
          {item.label}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        {item.type !== 'select' ? (
          <TextField
            variant='outlined'
            type={item.type}
            name={name}
            fullWidth
            margin='dense'
            onChange={formik.handleChange}
            value={formik.values[name]}
            helperText={formik.errors[name] && formik.errors[name]}
            error={formik.errors[name] ? true : false}
          />
        ) : (
          <SelectItem name={name} formik={formik} data={filters} />
        )}
      </Grid>
    </>
  );
};

export default FormItem;
