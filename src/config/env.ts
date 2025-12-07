/**
 * Environment configuration
 */

export const ENV = {
  // API Configuration
  API_BASE_URL: process.env.API_BASE_URL || 'https://api.example.com',
  API_TIMEOUT: Number(process.env.API_TIMEOUT) || 30000,

  // App Configuration
  APP_NAME: 'Food Preference App',
  APP_VERSION: '1.0.0',
  ENVIRONMENT: process.env.NODE_ENV || 'development',

  // Feature Flags
  ENABLE_LOGGING: process.env.NODE_ENV === 'development',
  ENABLE_ANALYTICS: process.env.ENABLE_ANALYTICS === 'true',

  // Storage Keys
  STORAGE_KEYS: {
    AUTH_TOKEN: '@foodpreferenceapp:auth_token',
    USER_DATA: '@foodpreferenceapp:user_data',
    THEME_PREFERENCE: '@foodpreferenceapp:theme_preference',
    ONBOARDING_COMPLETE: '@foodpreferenceapp:onboarding_complete',
  },
} as const;

export const isDevelopment = ENV.ENVIRONMENT === 'development';
export const isProduction = ENV.ENVIRONMENT === 'production';

