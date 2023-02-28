import { Grid, Skeleton } from '@mui/material';

const DefectListLoading = () => {
  return (
    <Grid container>
      {[...Array(8).keys()].map((i) => {
        return (
          <Grid
            key={i}
            item
            xs={12}
            sx={{ border: '1px solid', borderColor: 'main.darkGreen' }}
          >
            <Skeleton variant='rectangular' animation='wave' height={50} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DefectListLoading;
