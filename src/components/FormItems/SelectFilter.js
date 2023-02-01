import { MenuItem, Select } from '@mui/material';
import ScrollButtons from './ScrollButtons';

const SelectFilter = (props) => {
  const { name, formik, data } = props;
  return (
    <Select
      name={name}
      displayEmpty
      fullWidth
      onChange={formik.handleChange}
      value={formik.values[name]}
    >
      <ScrollButtons elmClass={'.MuiPaper-root.MuiMenu-paper'} />
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
