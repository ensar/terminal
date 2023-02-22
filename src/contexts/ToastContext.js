import Toast from 'components/Toast';
import { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ToastContext.Provider value={{ show, setShow }}>
      <Toast show={show} setShow={setShow} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => useContext(ToastContext);
