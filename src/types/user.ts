/**
 * User-related type definitions
 */

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  department?: string;
  employeeId?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export enum UserRole {
  EMPLOYEE = 'employee',
  HR = 'hr',
  ADMIN = 'admin',
}

export interface UserProfile extends User {
  preferences?: MealPreference[];
  dietaryRestrictions?: DietaryRestriction[];
}

export interface DietaryRestriction {
  id: string;
  name: string;
  type: 'allergy' | 'preference' | 'medical';
}

