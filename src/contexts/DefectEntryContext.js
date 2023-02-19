import { createContext, useContext, useEffect, useState } from 'react';
import { getDefectEntryData, getSingleDefectEntryData } from 'services/api';
import img from 'assets/images/car.jpeg';
import ac from 'assets/images/ac.png';

const DefectEntryContext = createContext();

export const DefectEntryProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [screenImg, setScreenImg] = useState(img);
  const [assyNo, setAssyNo] = useState();
  const [labelText, setLabelText] = useState();
  const [defect, setDefect] = useState();
  const [pointerCor, setPointerCor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    (async () => {
      const res = await getDefectEntryData();
      setData(res.data[0]);
    })();
  }, []);

  const getSingleDefect = async () => {
    const res = await getSingleDefectEntryData();
    setData(res.data[0]);
    setLabelText(res.data[0].defectButtonRecords[0].labelText);
    setScreenImg(ac);
  };
  return (
    <DefectEntryContext.Provider
      value={{
        data,
        setData,
        getSingleDefect,
        screenImg,
        assyNo,
        setAssyNo,
        labelText,
        defect,
        setDefect,
        pointerCor,
        setPointerCor,
      }}
    >
      {children}
    </DefectEntryContext.Provider>
  );
};

export const useDefectEntryContext = () => useContext(DefectEntryContext);
