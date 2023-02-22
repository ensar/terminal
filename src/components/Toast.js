import { Alert, Snackbar } from '@mui/material';
import { t } from 'i18next';

const Toast = ({
  show,
  setShow,
  severity = 'success',
  message = t('toastMessages.success'),
}) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Snackbar
      open={show}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        variant='filled'
        severity={severity}
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
