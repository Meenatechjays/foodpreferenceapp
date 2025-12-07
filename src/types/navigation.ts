/**
 * Navigation type definitions
 */

import type { NavigatorScreenParams } from '@react-navigation/native';
import type { User, Meal, MealPreference } from './index';

// Auth Stack
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

// Employee Stack
export type EmployeeStackParamList = {
  EmployeeHome: undefined;
  MealSelection: { date?: string };
  MealPreferences: undefined;
  Profile: undefined;
  MealDetails: { mealId: string };
};

// HR Stack
export type HRStackParamList = {
  HRHome: undefined;
  MealManagement: undefined;
  PreferenceOverview: undefined;
  UserManagement: undefined;
  Reports: undefined;
};

// Common Stack
export type CommonStackParamList = {
  Profile: undefined;
  Settings: undefined;
  Notifications: undefined;
};

// Main Tab Navigator
export type MainTabParamList = {
  EmployeeStack: NavigatorScreenParams<EmployeeStackParamList>;
  HRStack: NavigatorScreenParams<HRStackParamList>;
  CommonStack: NavigatorScreenParams<CommonStackParamList>;
};

// Root Navigator
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
};

// Helper type for navigation props
export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: {
    navigate: (screen: T, params?: RootStackParamList[T]) => void;
    goBack: () => void;
    replace: (screen: T, params?: RootStackParamList[T]) => void;
  };
  route: {
    params: RootStackParamList[T];
  };
};

