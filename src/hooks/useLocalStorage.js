export const useLocalStorage = () => {
  const get = (key) => {
    if (!window) {
      return;
    }
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : '';
  };

  const set = (key, value) => {
    if (window) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  return { get, set };
};
