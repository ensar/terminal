import { TableCell, TableFooter, TableRow } from '@mui/material';

const Footer = ({ data }) => {
  return (
    <TableFooter
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        paddingInline: '20px',
        boxSizing: 'border-box',
        borderBlock: '1px solid',
        backgroundColor: '#C6FFC8',
      }}
    >
      <TableRow sx={{ float: 'right' }}>
        <TableCell
          sx={{
            padding: 0,
            border: 'none !important',
            fontSize: '16px',
            color: '#000',
          }}
        >
          Total Rows:{data ? data.length : 0}
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default Footer;
