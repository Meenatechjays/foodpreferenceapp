/**
 * Store-related type definitions
 */

import type { User, UserRole } from '../types';

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface MealState {
  meals: import('../types').Meal[];
  preferences: import('../types').MealPreference[];
  selectedMeals: import('../types').MealSelection[];
  isLoading: boolean;
  error: string | null;
}

export interface UserState {
  profile: import('../types').UserProfile | null;
  isLoading: boolean;
  error: string | null;
}

export interface AppState {
  isOnboardingComplete: boolean;
  theme: 'light' | 'dark' | 'system';
  isLoading: boolean;
}

