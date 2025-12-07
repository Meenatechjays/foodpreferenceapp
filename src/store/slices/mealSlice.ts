/**
 * Meal preferences store slice using Zustand
 */

import { create } from 'zustand';
import type { Meal, MealPreference, MealSelection, DayOfWeek } from '../../types';
import type { MealState } from '../types';

interface MealStore extends MealState {
  // Actions
  setMeals: (meals: Meal[]) => void;
  addMeal: (meal: Meal) => void;
  updateMeal: (id: string, meal: Partial<Meal>) => void;
  removeMeal: (id: string) => void;

  // Preferences
  setPreferences: (preferences: MealPreference[]) => void;
  addPreference: (preference: MealPreference) => void;
  updatePreference: (id: string, preference: Partial<MealPreference>) => void;
  removePreference: (id: string) => void;
  getPreferencesByDay: (day: DayOfWeek) => MealPreference[];

  // Selected meals (for current selection session)
  setSelectedMeals: (meals: MealSelection[]) => void;
  addSelectedMeal: (meal: MealSelection) => void;
  removeSelectedMeal: (mealId: string) => void;
  clearSelectedMeals: () => void;

  // Loading & Error
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useMealStore = create<MealStore>((set, get) => ({
  // Initial state
  meals: [],
  preferences: [],
  selectedMeals: [],
  isLoading: false,
  error: null,

  // Meal actions
  setMeals: (meals: Meal[]) => {
    set({ meals });
  },

  addMeal: (meal: Meal) => {
    set((state) => ({
      meals: [...state.meals, meal],
    }));
  },

  updateMeal: (id: string, meal: Partial<Meal>) => {
    set((state) => ({
      meals: state.meals.map((m) => (m.id === id ? { ...m, ...meal } : m)),
    }));
  },

  removeMeal: (id: string) => {
    set((state) => ({
      meals: state.meals.filter((m) => m.id !== id),
    }));
  },

  // Preference actions
  setPreferences: (preferences: MealPreference[]) => {
    set({ preferences });
  },

  addPreference: (preference: MealPreference) => {
    set((state) => ({
      preferences: [...state.preferences, preference],
    }));
  },

  updatePreference: (id: string, preference: Partial<MealPreference>) => {
    set((state) => ({
      preferences: state.preferences.map((p) =>
        p.id === id ? { ...p, ...preference } : p
      ),
    }));
  },

  removePreference: (id: string) => {
    set((state) => ({
      preferences: state.preferences.filter((p) => p.id !== id),
    }));
  },

  getPreferencesByDay: (day: DayOfWeek) => {
    return get().preferences.filter((p) => p.dayOfWeek === day);
  },

  // Selected meals actions
  setSelectedMeals: (meals: MealSelection[]) => {
    set({ selectedMeals: meals });
  },

  addSelectedMeal: (meal: MealSelection) => {
    set((state) => {
      const existingIndex = state.selectedMeals.findIndex(
        (m) => m.mealId === meal.mealId
      );
      if (existingIndex >= 0) {
        // Update existing
        const updated = [...state.selectedMeals];
        updated[existingIndex] = meal;
        return { selectedMeals: updated };
      }
      // Add new
      return { selectedMeals: [...state.selectedMeals, meal] };
    });
  },

  removeSelectedMeal: (mealId: string) => {
    set((state) => ({
      selectedMeals: state.selectedMeals.filter((m) => m.mealId !== mealId),
    }));
  },

  clearSelectedMeals: () => {
    set({ selectedMeals: [] });
  },

  // Loading & Error
  setLoading: (isLoading: boolean) => {
    set({ isLoading });
  },

  setError: (error: string | null) => {
    set({ error });
  },

  clearError: () => {
    set({ error: null });
  },
}));

