import { MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { getFilters } from 'services/api';
import ScrollButtons from './ScrollButtons';

const SelectFilter = ({ name, formik }) => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const res = await getFilters();
      setData(res.data);
    })();
  }, []);
  return (
    <Select
      name={name}
      displayEmpty
      fullWidth
      onChange={formik.handleChange}
      value={formik.values[name]}
    >
      <ScrollButtons />
      {data &&
        data.map((filter) => {
          return (
            <MenuItem key={filter.termId} value={filter.termId}>
              {filter.termName}
            </MenuItem>
          );
        })}
    </Select>
  );
};

export default SelectFilter;
