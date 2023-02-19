import { useState } from 'react';
import { useDefectEntryContext } from 'contexts/DefectEntryContext';
import { Box, Typography } from '@mui/material';
import DefectsPopover from './Popover';

const DefectButton = ({ item, container }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { getSingleDefect } = useDefectEntryContext();
  const { boxY, boxX, boxWidth, boxHeight, boxColor, labelText, labelColor } =
    item;

  const getPercent = (pos) => {
    return {
      left: `${(pos * 100) / container?.getBoundingClientRect().width}%`,
      top: `${(pos * 100) / container?.getBoundingClientRect().height}%`,
    };
  };

  return (
    <>
      <Box
        component='button'
        sx={{
          position: 'absolute',
          top: getPercent(boxY).top,
          left: getPercent(boxX).left,
          width: boxWidth,
          height: boxHeight,
          border: `5px solid ${boxColor}`,
          borderRadius: '5px',
          display: 'flex',
          padding: '0',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          outline: 'none',
        }}
        onClick={(e) => {
          if (item.childPicID !== 0) {
            getSingleDefect();
          } else {
            setAnchorEl(e.currentTarget);
          }
        }}
      >
        <Typography
          sx={{
            maxWidth: '100%',
            backgroundColor: '#fff',
            textAlign: 'center',
            color: labelColor,
            fontSize: '12px',
          }}
        >
          {labelText}
        </Typography>
      </Box>
      <DefectsPopover
        item={item}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    </>
  );
};

export default DefectButton;
