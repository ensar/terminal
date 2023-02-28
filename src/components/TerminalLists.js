import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getTerminals } from 'services/api';
import Terminal from './Terminal';
import TerminalLoading from './Skeletons/TerminalLoading';

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

      {!terminals && <TerminalLoading />}
    </Grid>
  );
};

export default TerminalLists;
