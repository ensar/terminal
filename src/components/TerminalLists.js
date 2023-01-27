import { useEffect, useState } from 'react';
import { Grid, Skeleton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getTerminals } from 'services/api';
import Terminal from './Terminal';

const TerminalLists = () => {
  const [terminals, setTerminals] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const res = await getTerminals();
      setTerminals(res.data);
    })();
  }, []);

  return (
    <Grid container sx={{ marginTop: '30px', textAlign: 'center' }}>
      <Grid
        item
        xs={12}
        sx={{ border: '1px solid', borderColor: 'main.darkGreen' }}
      >
        <Typography variant='h6' sx={{ textDecoration: 'underline' }}>
          {t('termtitle')}
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{ borderRight: '1px solid', borderColor: 'main.darkGreen' }}
      >
        <Typography variant='h6'>{t('termSubTitle1')}</Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography variant='h6'>{t('termSubTitle2')}</Typography>
      </Grid>

      {terminals &&
        terminals.map((t) => {
          return <Terminal terminal={t} key={t.depCode} />;
        })}

      {!terminals &&
        [...Array(8).keys()].map((i) => {
          return (
            <>
              <Grid
                xs={3}
                sx={{ border: '1px solid', borderColor: 'main.darkGreen' }}
              >
                <Skeleton variant='rectangular' animation='wave' height={50} />
              </Grid>
              <Grid
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
        })}
    </Grid>
  );
};

export default TerminalLists;
