import { TableFooter } from '@mui/material';

const Footer = ({ data }) => {
  return (
    <TableFooter
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'end',
        paddingInline: '20px',
        boxSizing: 'border-box',
        borderBlock: '1px solid',
        backgroundColor: '#C6FFC8',
      }}
    >
      Total Rows:{data ? data.length : 0}
    </TableFooter>
  );
};

export default Footer;
