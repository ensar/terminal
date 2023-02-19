import { Grid } from '@mui/material';
import { useDefectEntryContext } from 'contexts/DefectEntryContext';
import { useFormik } from 'formik';
import FormGroup1 from './FormGroup1';
import FormGroup2 from './FormGroup2';
import VirtualKeyboard from 'components/FormItems/VirtualKeyboard';

const Form = ({ setOpen }) => {
  const { pointerCor } = useDefectEntryContext();
  const formik = useFormik({
    initialValues: {
      ExitDepartment: '',
      Explanation: '',
      AppliedOperation: '',
      SubResponsible: '',
      DefectClass: '',
      DefectResponsibles: '',
      Harigami: false,
      nrReason: '',
      pointerCor: pointerCor,
    },
    onSubmit: (values) => {
      console.log(values);
      setOpen(false);
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
