/**
 * User profile store slice using Zustand
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { UserProfile } from '../../types';
import { ENV } from '../../config/env';
import type { UserState } from '../types';

interface UserStore extends UserState {
  // Actions
  setProfile: (profile: UserProfile) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  clearProfile: () => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      // Initial state
      profile: null,
      isLoading: false,
      error: null,

      // Set profile
      setProfile: (profile: UserProfile) => {
        set({ profile });
      },

      // Update profile
      updateProfile: (updates: Partial<UserProfile>) => {
        set((state) => ({
          profile: state.profile
            ? { ...state.profile, ...updates }
            : null,
        }));
      },

      // Clear profile
      clearProfile: () => {
        set({ profile: null });
      },

      // Set loading
      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },

      // Set error
      setError: (error: string | null) => {
        set({ error });
      },

      // Clear error
      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: ENV.STORAGE_KEYS.USER_DATA,
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        profile: state.profile,
      }),
    }
  )
);

