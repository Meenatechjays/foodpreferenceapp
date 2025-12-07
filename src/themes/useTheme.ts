/**
 * Custom hook to access theme based on device color scheme
 */

import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme, type Theme } from './theme';

export const useTheme = (): Theme => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
};

