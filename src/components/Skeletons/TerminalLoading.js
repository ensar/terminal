import { Grid, Skeleton } from '@mui/material';

const TerminalLoading = () => {
  return [...Array(8).keys()].map((i) => {
    return (
      <>
        <Grid
          item
          key={i}
          xs={3}
          sx={{ border: '1px solid', borderColor: 'main.darkGreen' }}
        >
          <Skeleton variant='rectangular' animation='wave' height={50} />
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            border: '1px solid',
            borderColor: 'main.darkGreen',
            paddingInline: '10px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[...Array(4).keys()].map((i) => {
            return (
              <Skeleton
                key={i}
                variant='rounded'
                height={40}
                width={120}
                sx={{ marginRight: '10px' }}
              />
            );
          })}
        </Grid>
      </>
    );
  });
};

export default TerminalLoading;
