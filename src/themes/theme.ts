/**
 * Main theme object combining all theme properties
 */

import { lightColors, darkColors, type Colors } from './colors';
import { typography, type Typography } from './typography';
import { spacing, type Spacing } from './spacing';
import { shadows, type Shadows } from './shadows';

export const lightTheme = {
  colors: lightColors,
  typography,
  spacing,
  shadows,
  isDark: false,
} as const;

export const darkTheme = {
  colors: darkColors,
  typography,
  spacing,
  shadows,
  isDark: true,
} as const;

export type Theme = typeof lightTheme;

// Helper function to get theme colors
export const getThemeColors = (isDark: boolean): Colors => {
  return isDark ? darkColors : lightColors;
};

