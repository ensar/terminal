import axios from 'axios';

const getData = async (url, config) => {
  const res = await axios.get(url, config);
  return res.data;
};

export const getTerminals = async () =>
  getData(process.env.REACT_APP_TERMINALS_URL);

export const getFilters = async () =>
  getData(process.env.REACT_APP_FILTERS_URL);

export const getShifts = async () => getData(process.env.REACT_APP_SHIFTS_URL);

export const getDefects = async () =>
  getData(process.env.REACT_APP_DEFECTS_URL);

export const getHeaderData = async () =>
  getData(process.env.REACT_APP_HEADER_URL);

export const getDefectEntryData = async () =>
  getData(process.env.REACT_APP_DEFECTENTRY_URL);

export const getSingleDefectEntryData = async () =>
  getData(process.env.REACT_APP_SINGLEDEFECTENTRY_URL);

export const getDefectEntryFormData = async () =>
  getData(process.env.REACT_APP_DEFECTENTRYFORM_URL);

export const getnrReason = async () =>
  getData(process.env.REACT_APP_NRREASON_URL);

export const getLargeFontData = async () =>
  getData(process.env.REACT_APP_LARGEFONTDATA_URL);

export const getLargeFontDefects = async () =>
  getData(process.env.REACT_APP_LARGEFONTDEFECTS_URL);

export const getTaktTime = async () =>
  getData(process.env.REACT_APP_TAKTTIME_URL);
