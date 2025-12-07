/**
 * App-wide constants
 */

// Date & Time
export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  DISPLAY_WITH_TIME: 'MMM DD, YYYY hh:mm A',
  API: 'YYYY-MM-DD',
  TIME: 'hh:mm A',
  WEEKDAY: 'dddd',
} as const;

// Meal Constants
export const MEAL_TIMINGS = {
  BREAKFAST: { start: '07:00', end: '10:00' },
  LUNCH: { start: '12:00', end: '14:00' },
  DINNER: { start: '18:00', end: '20:00' },
  SNACK: { start: '15:00', end: '17:00' },
} as const;

// Validation
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  PHONE_REGEX: /^\+?[1-9]\d{1,14}$/,
} as const;

// Limits
export const LIMITS = {
  MAX_MEAL_PREFERENCES_PER_DAY: 3,
  MAX_QUANTITY_PER_MEAL: 5,
  MAX_SPECIAL_INSTRUCTIONS_LENGTH: 200,
  MAX_SEARCH_RESULTS: 50,
} as const;

// Debounce & Throttle
export const TIMING = {
  SEARCH_DEBOUNCE: 300,
  API_RETRY_DELAY: 1000,
  TOAST_DURATION: 3000,
  ANIMATION_DURATION: 300,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Your session has expired. Please login again.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  UNKNOWN_ERROR: 'An unexpected error occurred.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Welcome back!',
  LOGOUT_SUCCESS: 'You have been logged out successfully.',
  PREFERENCE_SAVED: 'Your meal preference has been saved.',
  PREFERENCE_UPDATED: 'Your meal preference has been updated.',
  PREFERENCE_DELETED: 'Your meal preference has been deleted.',
  PROFILE_UPDATED: 'Your profile has been updated.',
} as const;

