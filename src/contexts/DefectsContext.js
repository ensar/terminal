import { createContext, useContext, useEffect, useState } from 'react';
import { getDefects } from 'services/api';

const DefectsContext = createContext();

export const DefectsProvider = ({ children }) => {
  const [defects, setDefects] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getDefects();
      setDefects(res.data);
    })();
  }, []);

  useEffect(() => {
    setDefects(defects);
  }, [defects]);

  return (
    <DefectsContext.Provider value={{ defects, setDefects }}>
      {children}
    </DefectsContext.Provider>
  );
};

export const useDefectsContext = () => useContext(DefectsContext);
