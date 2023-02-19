import { Grid, Button } from '@mui/material';
import { useFormik } from 'formik';
import { loginSchema } from 'utils/validation';
import FormItem from './FormItems/FormItem';
import VirtualKeyboard from './FormItems/VirtualKeyboard';
import Shift from './FormItems/Shift';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

const LoginForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { depCode, filterCode } = useParams();

  const formItems = [
    { name: 'filter', type: 'select', label: t('form.filterLabel') },
    { name: 'register', type: 'text', label: t('form.registerLabel') },
    { name: 'password', type: 'password', label: t('form.passwordLabel') },
    { name: 'assy', type: 'text', label: t('form.assyLabel') },
  ];
  const formik = useFormik({
    initialValues: {
      filter: '',
      register: '',
      password: '',
      assy: '',
      shift: {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
        shiftCode: 'B',
      },
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate(
        `/terminal/defectentry/${depCode}/${filterCode}/${values.filter}`
      );
    },
  });

  return (
    <Grid item xs={12} paddingY='10px'>
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          xs={8}
          alignItems='center'
          sx={{ marginInline: 'auto' }}
        >
          {formItems.map((item) => {
            return <FormItem key={item.name} item={item} formik={formik} />;
          })}
          <Shift formik={formik} />
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              height: '50px',
              marginTop: '10px',
              gap: '5px',
              flexWrap: 'wrap',
            }}
          >
            <Button
              type='submit'
              variant='contained'
              sx={{
                backgroundColor: '#000',
                flex: 1,
                '&:hover': {
                  backgroundColor: '#000',
                },
              }}
            >
              {t('form.login')}
            </Button>
            <Button variant='contained' color='error' sx={{ flex: 1 }}>
              {t('form.close')}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid item xs={11} sx={{ marginTop: '10px', marginInline: 'auto' }}>
        <VirtualKeyboard formik={formik} />
      </Grid>
    </Grid>
  );
};

export default LoginForm;
