export const useLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? item : '';
};
