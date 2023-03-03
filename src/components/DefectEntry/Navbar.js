import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { getHeaderData } from 'services/api';
import { useDefectEntryContext } from 'contexts/DefectEntryContext';
import { useTranslation } from 'react-i18next';

const Navbar = ({ style }) => {
  const [headerData, setHeaderData] = useState();
  const { t } = useTranslation();
  const { setAssyNo } = useDefectEntryContext();

  useEffect(() => {
    (async () => {
      const res = await getHeaderData();
      setHeaderData(res.data[0]);
      setAssyNo(res.data[0].assyNo);
    })();
  }, []);

  return (
    <Grid
      item
      xs={12}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid',
        borderColor: 'main.darkGreen',
        paddingInline: '10px',
        flexWrap: 'wrap',
        ...style,
      }}
    >
      {headerData && (
        <>
          <Grid
            item
            xs={9}
            display='flex'
            sx={{ justifyContent: 'space-between' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant='body1' sx={{ fontWeight: '400' }}>
                  {t('defectEntry.assy')}
                </Typography>
                <Typography variant='body1' sx={{ fontWeight: '500' }}>
                  {headerData.assyNo}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '120px',
                  backgroundColor: 'main.blue',
                  border: '1px solid',
                  borderRadius: '4px',
                  marginLeft: '10px',
                  textAlign: 'center',
                }}
              >
                <Typography variant='body1' sx={{ fontWeight: '400' }}>
                  {t('defectEntry.body')}
                </Typography>
                <Typography variant='body1' sx={{ fontWeight: '500' }}>
                  {headerData.bodyNo}
                </Typography>
              </Box>
              <Typography
                variant='h5'
                sx={{ marginLeft: '10px', fontWeight: '500', color: '#677133' }}
              >
                {t('defectEntry.title')}
              </Typography>
            </Box>
            <Box
              sx={{
                width: '70px',
                backgroundColor: headerData.bgColor,
                borderRadius: '4px',
                border: '1px solid #000',
                textAlign: 'center',
                color: '#fff',
                paddingInline: '5px',
              }}
            >
              <Typography variant='body1' sx={{ fontWeight: '400' }}>
                {t('defectEntry.color')}
              </Typography>
              <Typography variant='body1' sx={{ fontWeight: '500' }}>
                {headerData.extCode}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Typography variant='body1' color='main.darkRed' textAlign='center'>
              {headerData.firstname} {headerData.lastname} (
              {headerData.departmentCode})
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Navbar;
