import { TableCell, TableHead, TableRow } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Header = ({ columns, extraColumns }) => {
  const { t } = useTranslation();
  return (
    <TableHead>
      <TableRow sx={{ backgroundColor: '#C6FFC8' }}>
        {columns.map((column, i) => (
          <TableCell key={i}>{t(`table.${column}`)}</TableCell>
        ))}
        {extraColumns.map((text, i) => {
          return <TableCell key={i}>{text}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
};

export default Header;
