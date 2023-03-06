import { Grid } from '@mui/material';
import { useDefectEntryContext } from 'contexts/DefectEntryContext';
import { useToastContext } from 'contexts/ToastContext';
import { useFormik } from 'formik';
import FormGroup1 from './FormGroup1';
import FormGroup2 from './FormGroup2';
import VirtualKeyboard from 'components/FormItems/VirtualKeyboard';
import { saveDefectFormInitialValues } from 'constants';

const Form = ({ setOpen }) => {
  const { pointerCor } = useDefectEntryContext();
  const { setToast } = useToastContext();

  const formik = useFormik({
    initialValues: { ...saveDefectFormInitialValues, pointerCor },
    onSubmit: (values) => {
      console.log(values);
      setOpen(false);
      setToast(true);
    },
  });
  return (
    <Grid item xs={12}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container xs={12}>
          <FormGroup1 formik={formik} />
          <FormGroup2 formik={formik} setOpen={setOpen} />
          <VirtualKeyboard formik={formik} />
        </Grid>
      </form>
    </Grid>
  );
};

export default Form;
