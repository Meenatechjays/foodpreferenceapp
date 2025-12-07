/**
 * Color palette for light and dark themes
 */

export const lightColors = {
  // Primary colors
  primary: '#007AFF',
  primaryDark: '#0051D5',
  primaryLight: '#5AC8FA',

  // Secondary colors
  secondary: '#5856D6',
  secondaryDark: '#3634A3',
  secondaryLight: '#AF52DE',

  // Background colors
  background: '#FFFFFF',
  surface: '#F2F2F7',
  surfaceVariant: '#E5E5EA',

  // Text colors
  text: '#000000',
  textSecondary: '#8E8E93',
  textTertiary: '#C7C7CC',
  textInverse: '#FFFFFF',

  // Status colors
  success: '#34C759',
  successLight: '#D4F4DD',
  error: '#FF3B30',
  errorLight: '#FFEBEE',
  warning: '#FF9500',
  warningLight: '#FFF4E6',
  info: '#007AFF',
  infoLight: '#E3F2FD',

  // Border colors
  border: '#C6C6C8',
  borderLight: '#E5E5EA',
  divider: '#C6C6C8',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.4)',
  overlayLight: 'rgba(0, 0, 0, 0.1)',
};

export const darkColors = {
  // Primary colors
  primary: '#0A84FF',
  primaryDark: '#0051D5',
  primaryLight: '#5AC8FA',

  // Secondary colors
  secondary: '#5E5CE6',
  secondaryDark: '#3634A3',
  secondaryLight: '#BF5AF2',

  // Background colors
  background: '#000000',
  surface: '#1C1C1E',
  surfaceVariant: '#2C2C2E',

  // Text colors
  text: '#FFFFFF',
  textSecondary: '#98989D',
  textTertiary: '#636366',
  textInverse: '#000000',

  // Status colors
  success: '#30D158',
  successLight: '#1E3A28',
  error: '#FF453A',
  errorLight: '#3D1F1F',
  warning: '#FF9F0A',
  warningLight: '#3D2F1F',
  info: '#0A84FF',
  infoLight: '#1E2A3A',

  // Border colors
  border: '#38383A',
  borderLight: '#2C2C2E',
  divider: '#38383A',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.6)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
};

export type Colors = typeof lightColors;

