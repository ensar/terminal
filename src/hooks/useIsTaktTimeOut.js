import { useEffect, useState } from 'react';
import { getTaktTime } from 'services/api';

export const useIsTaktTimeOut = (open = true) => {
  const [taktTime, setTaktTime] = useState(50);
  const [taktTimeOut, setTaktTimeOut] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getTaktTime();
      setTaktTime(res.data[0]);
    })();
  }, []);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => {
        setTaktTimeOut(true);
      }, taktTime * 1000);
    }
  }, [taktTime, open]);

  return { taktTimeOut };
};
