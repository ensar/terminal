import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { getLargeFontDefects } from 'services/api';

const Defects = () => {
  const [defects, setDefects] = useState();

  useEffect(() => {
    (async () => {
      const res = await getLargeFontDefects();
      setDefects(res.data);
    })();
  }, []);

  return (
    <Grid item xs={12}>
      {defects &&
        defects.map((defect) => {
          return (
            <Typography
              key={defect.partName}
              variant='h5'
              fontWeight='500'
              marginBottom='5px'
            >
              {defect.partName} - {defect.defectName}
            </Typography>
          );
        })}
    </Grid>
  );
};

export default Defects;
