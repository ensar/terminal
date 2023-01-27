import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        width: '100vw',
        height: 70,
        backgroundColor: 'main.green',
        paddingInline: { xs: '20px', md: '50px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant='h5'>Complete Vehicle Quality</Typography>
      <Box
        sx={{
          width: 250,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'space-between',
          '& a': {
            color: 'main.red',
            textDecoration: 'none',
          },
        }}
      >
        <Link to='/'>{t('nav.link1')}</Link>
        <Link to='/'>{t('nav.link2')}</Link>
        <Link to='/'>{t('nav.link3')}</Link>
      </Box>
      <IconButton
        size='large'
        sx={{ display: { xs: 'block', md: 'none' } }}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>{t('nav.link1')}</MenuItem>
        <MenuItem onClick={handleClose}>{t('nav.link2')}</MenuItem>
        <MenuItem onClick={handleClose}>{t('nav.link3')}</MenuItem>
      </Menu>
    </Box>
  );
};

export default Navbar;
