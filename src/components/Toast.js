import { Alert, Snackbar } from '@mui/material';
import { useToastContext } from 'contexts/ToastContext';
import { t } from 'i18next';

const Toast = () => {
  const { toast, setToast } = useToastContext();
  const handleClose = () => {
    setToast(null);
  };

  return (
    <Snackbar
      open={Boolean(toast)}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        variant='filled'
        severity={toast?.severity || 'success'}
        sx={{ width: '100%' }}
      >
        {toast?.message || t('toastMessages.success')}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
