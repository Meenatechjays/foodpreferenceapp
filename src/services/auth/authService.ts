/**
 * Authentication service - handles all auth-related API calls
 */

import { apiClient } from '../api/client';
import { API_ENDPOINTS } from '../../config/api';
import { storageService } from '../storage/storageService';
import { ENV } from '../../config/env';
import type { User } from '../../types';
import type { ApiResponse } from '../../types/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  name: string;
  role?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

class AuthService {
  /**
   * Login user
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );

    if (response.data) {
      // Store token
      await storageService.setItem(ENV.STORAGE_KEYS.AUTH_TOKEN, response.data.token);
      // Store user data
      await storageService.setItem(ENV.STORAGE_KEYS.USER_DATA, response.data.user);
    }

    return response.data!;
  }

  /**
   * Signup new user
   */
  async signup(data: SignupData): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>(
      API_ENDPOINTS.AUTH.SIGNUP,
      data
    );

    if (response.data) {
      // Store token
      await storageService.setItem(ENV.STORAGE_KEYS.AUTH_TOKEN, response.data.token);
      // Store user data
      await storageService.setItem(ENV.STORAGE_KEYS.USER_DATA, response.data.user);
    }

    return response.data!;
  }

  /**
   * Logout user
   */
  async logout(): Promise<void> {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    } catch (error) {
      // Continue with logout even if API call fails
      console.error('Logout API call failed:', error);
    } finally {
      // Clear local storage
      await storageService.removeItem(ENV.STORAGE_KEYS.AUTH_TOKEN);
      await storageService.removeItem(ENV.STORAGE_KEYS.USER_DATA);
    }
  }

  /**
   * Refresh authentication token
   */
  async refreshToken(): Promise<string> {
    const response = await apiClient.post<{ token: string }>(
      API_ENDPOINTS.AUTH.REFRESH_TOKEN
    );

    if (response.data?.token) {
      await storageService.setItem(ENV.STORAGE_KEYS.AUTH_TOKEN, response.data.token);
      return response.data.token;
    }

    throw new Error('Failed to refresh token');
  }

  /**
   * Forgot password
   */
  async forgotPassword(email: string): Promise<void> {
    await apiClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
  }

  /**
   * Reset password
   */
  async resetPassword(token: string, newPassword: string): Promise<void> {
    await apiClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
      token,
      password: newPassword,
    });
  }

  /**
   * Verify email
   */
  async verifyEmail(token: string): Promise<void> {
    await apiClient.post(API_ENDPOINTS.AUTH.VERIFY_EMAIL, { token });
  }

  /**
   * Get current user from storage
   */
  async getCurrentUser(): Promise<User | null> {
    return await storageService.getItem<User>(ENV.STORAGE_KEYS.USER_DATA);
  }

  /**
   * Get current token from storage
   */
  async getCurrentToken(): Promise<string | null> {
    return await storageService.getItem<string>(ENV.STORAGE_KEYS.AUTH_TOKEN);
  }
}

export const authService = new AuthService();

