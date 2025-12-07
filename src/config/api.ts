/**
 * API endpoints configuration
 */

import { ENV } from './env';

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    VERIFY_EMAIL: '/auth/verify-email',
  },

  // User
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    CHANGE_PASSWORD: '/user/change-password',
    UPLOAD_AVATAR: '/user/avatar',
  },

  // Meals
  MEALS: {
    LIST: '/meals',
    DETAIL: (id: string) => `/meals/${id}`,
    CATEGORIES: '/meals/categories',
    SEARCH: '/meals/search',
  },

  // Meal Preferences
  PREFERENCES: {
    LIST: '/preferences',
    CREATE: '/preferences',
    UPDATE: (id: string) => `/preferences/${id}`,
    DELETE: (id: string) => `/preferences/${id}`,
    BY_DATE: (date: string) => `/preferences/date/${date}`,
    BY_WEEK: (weekStart: string) => `/preferences/week/${weekStart}`,
  },

  // HR Endpoints
  HR: {
    USERS: '/hr/users',
    PREFERENCES_OVERVIEW: '/hr/preferences/overview',
    MEAL_STATISTICS: '/hr/meals/statistics',
    REPORTS: '/hr/reports',
  },
} as const;

export const API_CONFIG = {
  BASE_URL: ENV.API_BASE_URL,
  TIMEOUT: ENV.API_TIMEOUT,
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
} as const;

