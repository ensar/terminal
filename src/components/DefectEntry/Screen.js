import { useEffect, useRef } from 'react';
import { useDefectEntryContext } from 'contexts/DefectEntryContext';
import { Grid } from '@mui/material';
import DefectButton from './DefectButton';
import { drawLine } from 'utils/canvas';
import Pointer from './Pointer';

const Screen = () => {
  const ref = useRef();
  const { data, defect, screenImg, pointerCor, setPointerCor } =
    useDefectEntryContext();

  useEffect(() => {
    drawLine(data.defectButtonRecords, ref?.current);
  }, [data]);

  return (
    <Grid
      item
      xs={9}
      ref={ref}
      sx={{
        position: 'relative',
        height: '600px',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      <canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <img
        src={screenImg}
        alt='car'
        style={{
          width: '105%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {data &&
        data.defectButtonRecords?.map((b) => {
          return (
            <DefectButton key={b.buttonId} item={b} container={ref?.current} />
          );
        })}
      {defect && <Pointer cor={pointerCor} setCor={setPointerCor} />}
    </Grid>
  );
};

export default Screen;
