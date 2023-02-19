import { MenuItem, Popover } from '@mui/material';
import { useDefectEntryContext } from 'contexts/DefectEntryContext';
import ScrollButtons from 'components/FormItems/ScrollButtons';

const DefectsPopover = ({ item, anchorEl, setAnchorEl }) => {
  const { data, setData, setDefect } = useDefectEntryContext();
  const defects = data.partDefects.filter((p) => p.buttonId === item.buttonId);

  const handleClick = (e) => {
    setDefect(e.target.innerText);
    setAnchorEl(null);
    setData([]);
  };
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
    >
      {defects.length > 7 && (
        <ScrollButtons elmClass={'.MuiPaper-root.MuiPaper-elevation'} />
      )}
      {defects &&
        defects.map((defect) => {
          return (
            <MenuItem
              key={defect.defectId}
              value={defect.defectName}
              sx={{
                paddingInline: '20px',
                border: '1px solid',
                color: '#000',
                fontWeight: '600',
              }}
              onClick={handleClick}
            >
              {defect.defectName}
            </MenuItem>
          );
        })}
    </Popover>
  );
};

export default DefectsPopover;
