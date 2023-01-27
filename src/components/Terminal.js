import { Button, Grid, Tooltip, Typography } from '@mui/material';

const Terminal = ({ terminal }) => {
  return (
    <>
      <Grid
        item
        xs={3}
        sx={{
          border: '1px solid #ddd',
          paddingBlock: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='subtitle1'>
          ( {terminal.depCode} ) {terminal.depName}
        </Typography>
      </Grid>
      <Grid
        item
        xs={9}
        sx={{
          border: '1px solid #ddd',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          paddingInline: '10px',
        }}
      >
        {terminal.filterBaseds.map((t, i) => {
          return (
            <Tooltip
              title={`${t.userDesc} - ${t.termName}`}
              placement='bottom'
              arrow
            >
              <Button
                key={i}
                href={`/terminal/${terminal.depCode}/${t.filterCode}`}
                sx={{
                  position: 'relative',
                  border: '1px solid',
                  borderColor: 'main.darkGreen',
                  width: '120px',
                  marginRight: '10px',
                }}
              >
                <Typography variant='button' color='ButtonText'>
                  {t.filterCode}
                </Typography>
                {t.linkCount > 1 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '20px',
                      height: '15px',
                      backgroundColor: 'red',
                      color: '#fff',
                      fontSize: '10px',
                      borderTopRightRadius: '4px',
                      borderBottomLeftRadius: '4px',
                    }}
                  >
                    {t.linkCount}
                  </span>
                )}
              </Button>
            </Tooltip>
          );
        })}
      </Grid>
    </>
  );
};

export default Terminal;
