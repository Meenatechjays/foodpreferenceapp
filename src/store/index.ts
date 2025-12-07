/**
 * Central export point for all stores
 */

export { useAuthStore } from './slices/authSlice';
export { useMealStore } from './slices/mealSlice';
export { useUserStore } from './slices/userSlice';
export { useAppStore } from './slices/appSlice';

export type { AuthState, MealState, UserState, AppState } from './types';

