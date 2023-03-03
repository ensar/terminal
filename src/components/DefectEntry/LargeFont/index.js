import { useEffect, useRef, useState } from 'react';
import { Grid, Modal, Typography } from '@mui/material';
import { useDefectEntryContext } from 'contexts/DefectEntryContext';
import { getLargeFontData } from 'services/api';
import Navbar from '../Navbar';
import Defects from './Defects';
import SearchBox from './SearchBox';
import { useIsTaktTimeOut } from 'hooks/useIsTaktTimeOut';
import alarmAudio from 'assets/sounds/takttimealarm.mp3';

const LargeFont = ({ open, setOpen }) => {
  const [titleData, setTitleData] = useState();
  const { assyNo } = useDefectEntryContext();
  const { taktTimeOut } = useIsTaktTimeOut(open);
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const res = await getLargeFontData();
      setTitleData(res.data[0]);
    })();
  }, []);
  useEffect(() => {
    if (taktTimeOut && ref.current) {
      ref?.current.play();
    }
  }, [taktTimeOut]);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Grid
        container
        xs={12}
        sx={{
          height: '100vh',
          backgroundColor: taktTimeOut ? 'main.red' : 'main.green',
          border: 'none',
          borderRadius: '8px',
          padding: '10px',
        }}
      >
        <Navbar style={{ backgroundColor: '#fff', height: '80px' }} />
        <Grid item xs={10} sx={{ textAlign: 'center' }}>
          <Typography variant='h1' fontWeight='500'>
            {titleData?.modelCode} - {assyNo}
          </Typography>
          <Typography variant='h1' fontWeight='500'>
            {titleData?.modelId}
          </Typography>
        </Grid>
        <SearchBox assyNo={assyNo} setOpen={setOpen} />
        <Defects />
        <audio src={alarmAudio} ref={ref} loop></audio>
      </Grid>
    </Modal>
  );
};

export default LargeFont;
