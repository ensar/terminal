import {
  TableCell,
  TableRow,
  TableBody,
  Button,
  IconButton,
  Select,
  FormControl,
  MenuItem,
} from '@mui/material';
import { Save, Edit, Delete } from '@mui/icons-material';
import { useToastContext } from 'contexts/ToastContext';

const Body = ({ data, columns, setData }) => {
  const { setShow } = useToastContext();
  const findSelected = (id) => {
    return data[0]?.nrReasonList.find((n) => n.nrId === id);
  };

  const deleteDefect = (id) => {
    setData([
      {
        ...data[0],
        defectList: data[0].defectList.filter((d) => d.vinNo !== id),
      },
    ]);
    setShow(true);
  };

  return (
    <TableBody>
      {data &&
        data[0]?.defectList.map((row, i) => {
          return (
            <TableRow hover tabIndex={-1} key={i}>
              {columns.map((column, i) => {
                const value = row[column.id];
                return (
                  <TableCell
                    key={i}
                    sx={{
                      padding: 0,
                      overflowX: 'hidden',
                      textAlign: 'center',
                    }}
                  >
                    {column.id === 'colorExtCode' ? (
                      <Button sx={{ backgroundColor: row.rgbCode }}>
                        {value}
                      </Button>
                    ) : (
                      value
                    )}
                  </TableCell>
                );
              })}
              <TableCell>
                <FormControl sx={{ width: '100px' }} size='small'>
                  <Select
                    defaultValue={''}
                    value={findSelected(row.nrReasonId)?.nrId}
                  >
                    <MenuItem value={findSelected(row.nrReasonId)?.nrId}>
                      {findSelected(row.nrReasonId)?.nrReasonDetail}
                    </MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <IconButton
                  sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    borderRadius: '4px',
                    width: '45px',
                    height: '30px',
                  }}
                >
                  <Save fontSize='small' />
                </IconButton>
              </TableCell>
              <TableCell
                sx={{
                  display: 'flex',
                  height: '60px',
                  alignItems: 'center',
                  padding: 0,
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: 'main.darkRed',
                    color: '#fff',
                    borderRadius: '4px',
                    width: '45px',
                    height: '30px',
                    marginInline: '5px',
                  }}
                >
                  <Edit fontSize='small' />
                </IconButton>
                <IconButton
                  sx={{
                    backgroundColor: 'main.darkRed',
                    color: '#fff',
                    borderRadius: '4px',
                    width: '45px',
                    height: '30px',
                  }}
                  onClick={() => deleteDefect(row.vinNo)}
                >
                  <Delete fontSize='small' />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default Body;
