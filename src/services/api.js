import axios from 'axios';

export const getTerminals = async () => {
  const res = await axios.get(process.env.REACT_APP_TERMINALS_URL);
  return res.data;
};
