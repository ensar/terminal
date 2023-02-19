import { MenuItem, Select } from '@mui/material';
import ScrollButtons from 'components/FormItems/ScrollButtons';

const SelectItem = ({ name, formik, item, data }) => {
  return (
    <Select
      name={name}
      fullWidth
      sx={{ marginBlock: '2px', backgroundColor: '#fff' }}
      onChange={formik.handleChange}
      value={formik.values[name]}
      defaultValue=''
    >
      <ScrollButtons />
      {item &&
        item?.errDetailComboBoxValueDTOList?.map((v) => {
          return (
            <MenuItem key={v.dataCode} value={v.dataCode}>
              {v.dataValue}
            </MenuItem>
          );
        })}

      {item.dataItemId === 19 &&
        data?.subResponsiblesByDefrespId
          .filter((d) => d.defrespId == formik.values['DefectResponsibles'])[0]
          ?.subResponsibles?.map((d) => {
            return (
              <MenuItem key={d.dataCode} value={d.dataCode}>
                {d.dataValue}
              </MenuItem>
            );
          })}
    </Select>
  );
};

export default SelectItem;
