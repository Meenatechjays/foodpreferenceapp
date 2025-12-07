/**
 * App-level store slice using Zustand
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENV } from '../../config/env';
import type { AppState } from '../types';

interface AppStore extends AppState {
  // Actions
  setOnboardingComplete: (complete: boolean) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setLoading: (isLoading: boolean) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      // Initial state
      isOnboardingComplete: false,
      theme: 'system',
      isLoading: false,

      // Set onboarding complete
      setOnboardingComplete: (complete: boolean) => {
        set({ isOnboardingComplete: complete });
      },

      // Set theme
      setTheme: (theme: 'light' | 'dark' | 'system') => {
        set({ theme });
      },

      // Set loading
      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },
    }),
    {
      name: '@foodpreferenceapp:app_state',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

