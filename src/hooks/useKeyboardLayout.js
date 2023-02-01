import trlayout from 'simple-keyboard-layouts/build/layouts/turkish';
import enlayout from 'simple-keyboard-layouts/build/layouts/english';
import frlayout from 'simple-keyboard-layouts/build/layouts/french';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const useKeyboardLayout = () => {
  const lng = useLocalStorage('i18nextLng');
  switch (lng) {
    case 'tr':
      return trlayout;
    case 'en':
      return enlayout;
    case 'fr':
      return frlayout;
    default:
      return trlayout;
  }
};
