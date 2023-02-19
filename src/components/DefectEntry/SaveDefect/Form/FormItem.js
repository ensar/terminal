import { Grid, TextField, Typography } from '@mui/material';
import SelectItem from './SelectItem';

const FormItem = ({ item, formik, data }) => {
  const name = item.englishUserName.split(' ').join('');

  return (
    <>
      <Grid item xs={4}>
        <Typography variant='body1' sx={{ color: '#000', fontWeight: 500 }}>
          {item.englishUserName}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        {item.controlType === 'TXA' ? (
          <TextField
            variant='outlined'
            name={name}
            fullWidth
            sx={{ marginBlock: '2px', backgroundColor: '#fff' }}
            onChange={formik.handleChange}
            value={formik.values[name]}
          />
        ) : (
          <SelectItem name={name} formik={formik} item={item} data={data} />
        )}
      </Grid>
    </>
  );
};
export default FormItem;
