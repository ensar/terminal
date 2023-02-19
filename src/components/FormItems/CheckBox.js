import { Checkbox, FormControlLabel } from '@mui/material';

const CheckBox = ({ label, onChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name={label}
          onChange={onChange}
          size='medium'
          sx={{ padding: 0, '& .MuiSvgIcon-root': { fontSize: 50 } }}
        />
      }
      label={label}
    />
  );
};

export default CheckBox;
