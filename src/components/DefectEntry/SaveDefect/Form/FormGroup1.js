import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { getDefectEntryFormData } from 'services/api';
import FormItem from './FormItem';

const FormGroup1 = ({ formik }) => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const res = await getDefectEntryFormData();
      setData(res);
    })();
  }, []);
  return (
    <Grid container xs={6}>
      {data &&
        data.requiredFieldsByInspectionDTOList
          .sort((a, b) => a.englishUserName.localeCompare(b.englishUserName))
          .map((field, i) => {
            return (
              <FormItem key={i} item={field} formik={formik} data={data} />
            );
          })}
    </Grid>
  );
};

export default FormGroup1;
