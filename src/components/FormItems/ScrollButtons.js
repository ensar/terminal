import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ScrollButtons = () => {
  const [btnPos, setBtnPos] = useState(0);

  const scrollTheElement = (pos) => {
    const selectElm = document.querySelector('.MuiPaper-root.MuiMenu-paper');
    selectElm.scrollBy(0, pos);
  };

  useEffect(() => {
    const selectElm = document.querySelector(
      '.css-1ualgfl-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root'
    );
    const pos = selectElm.offsetLeft + selectElm.offsetWidth;
    setBtnPos(pos);

    function updateSize() {
      setBtnPos(pos + selectElm.offsetWidth);
    }

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [btnPos]);

  return (
    <Box
      sx={{
        width: '100px',
        height: '50px',
        background: 'red',
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
