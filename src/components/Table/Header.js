import { TableCell, TableHead, TableRow } from '@mui/material';

const Header = ({ columns, extraColumns }) => {
  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: '#C6FFC8' }}>
        {columns.map((column, i) => (
          <TableCell key={i}>{column.label}</TableCell>
        ))}
        {extraColumns.map((text, i) => {
          return <TableCell key={i}>{text}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
};

export default Header;
