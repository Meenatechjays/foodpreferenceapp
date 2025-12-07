/**
 * Meal-related type definitions
 */

export interface Meal {
  id: string;
  name: string;
  description: string;
  category: MealCategory;
  imageUrl?: string;
  price?: number;
  ingredients: string[];
  allergens?: string[];
  nutritionalInfo?: NutritionalInfo;
  availableDays?: DayOfWeek[];
  createdAt: string;
  updatedAt: string;
}

export enum MealCategory {
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
  SNACK = 'snack',
  BEVERAGE = 'beverage',
}

export enum DayOfWeek {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

export interface MealPreference {
  id: string;
  userId: string;
  mealId: string;
  meal?: Meal;
  dayOfWeek: DayOfWeek;
  quantity: number;
  specialInstructions?: string;
  status: PreferenceStatus;
  createdAt: string;
  updatedAt: string;
}

export enum PreferenceStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
}

export interface NutritionalInfo {
  calories: number;
  protein: number; // in grams
  carbs: number; // in grams
  fat: number; // in grams
  fiber?: number; // in grams
  sugar?: number; // in grams
}

export interface MealSelection {
  mealId: string;
  quantity: number;
  specialInstructions?: string;
}

