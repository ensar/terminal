import { Grid, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SelectFilter from './SelectFilter';

const FormItem = ({ item, formik }) => {
  const { t } = useTranslation();
  const { name } = item;

  return (
    <>
      <Grid item xs={4}>
        <Typography variant='body1' sx={{ color: '#000', fontWeight: 500 }}>
          {t(`form.${item.label}`)}
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
          <SelectFilter name={name} formik={formik} />
        )}
      </Grid>
    </>
  );
};

export default FormItem;
