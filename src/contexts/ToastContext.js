import Toast from 'components/Toast';
import { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      <Toast />
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
