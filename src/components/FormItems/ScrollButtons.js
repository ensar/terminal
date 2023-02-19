import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ScrollButtons = ({ elmClass = '.MuiPaper-root.MuiMenu-paper' }) => {
  const [btnPos, setBtnPos] = useState(0);

  const scrollTheElement = (pos) => {
    const selectElm = document.querySelector(elmClass);
    selectElm.scrollBy(0, pos);
  };

  useEffect(() => {
    const selectElm = document.querySelector(elmClass);
    const pos = selectElm.offsetLeft + selectElm.offsetWidth;
    setBtnPos(pos);

    function updateSize() {
      setBtnPos(pos);
    }

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [elmClass, btnPos]);

  return (
    <Box
      sx={{
        width: '100px',
        height: '50px',
        position: 'fixed',
        left: `${btnPos}px`,
      }}
    >
      <Button
        variant='contained'
        sx={{
          backgroundColor: 'main.green',
          width: '100px',
          height: '50px',
          borderRadius: 0,
          border: '1px solid',
          borderColor: 'main.darkGreen',
          '&:hover': {
            backgroundColor: 'main.green',
          },
        }}
        onClick={() => scrollTheElement(-20)}
      >
        <KeyboardArrowUpIcon sx={{ color: '#000' }} />
      </Button>
      <Button
        variant='contained'
        sx={{
          border: '1px solid',
          borderColor: 'main.darkGreen',
          backgroundColor: 'main.green',
          width: '100px',
          height: '50px',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: 'main.green',
          },
        }}
        onClick={() => scrollTheElement(20)}
      >
        <KeyboardArrowDownIcon sx={{ color: '#000' }} />
      </Button>
    </Box>
  );
};

export default ScrollButtons;
