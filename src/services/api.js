import axios from 'axios';

export const getTerminals = async () => {
  const res = await axios.get(process.env.REACT_APP_TERMINALS_URL);
  return res.data;
};

export const getFilters = async () => {
  const res = await axios.get(process.env.REACT_APP_FILTERS_URL);
  return res.data;
};

export const getShifts = async () => {
  const res = await axios.get(process.env.REACT_APP_SHIFTS_URL);
  return res.data;
};
