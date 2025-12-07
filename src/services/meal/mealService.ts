/**
 * Meal service - handles all meal-related API calls
 */

import { apiClient } from '../api/client';
import { API_ENDPOINTS } from '../../config/api';
import type { Meal, MealPreference, MealCategory, DayOfWeek } from '../../types';
import type { ApiResponse, PaginatedResponse } from '../../types/api';

export interface MealListParams {
  category?: MealCategory;
  search?: string;
  page?: number;
  limit?: number;
}

export interface CreatePreferenceData {
  mealId: string;
  dayOfWeek: DayOfWeek;
  quantity: number;
  specialInstructions?: string;
}

class MealService {
  /**
   * Get list of meals
   */
  async getMeals(params?: MealListParams): Promise<PaginatedResponse<Meal>> {
    const response = await apiClient.get<PaginatedResponse<Meal>>(
      API_ENDPOINTS.MEALS.LIST,
      { params }
    );
    return response.data!;
  }

  /**
   * Get meal by ID
   */
  async getMealById(id: string): Promise<Meal> {
    const response = await apiClient.get<Meal>(API_ENDPOINTS.MEALS.DETAIL(id));
    return response.data!;
  }

  /**
   * Search meals
   */
  async searchMeals(query: string): Promise<Meal[]> {
    const response = await apiClient.get<Meal[]>(API_ENDPOINTS.MEALS.SEARCH, {
      params: { q: query },
    });
    return response.data || [];
  }

  /**
   * Get meal categories
   */
  async getCategories(): Promise<MealCategory[]> {
    const response = await apiClient.get<MealCategory[]>(
      API_ENDPOINTS.MEALS.CATEGORIES
    );
    return response.data || [];
  }

  /**
   * Get user meal preferences
   */
  async getPreferences(): Promise<MealPreference[]> {
    const response = await apiClient.get<MealPreference[]>(
      API_ENDPOINTS.PREFERENCES.LIST
    );
    return response.data || [];
  }

  /**
   * Get preferences by date
   */
  async getPreferencesByDate(date: string): Promise<MealPreference[]> {
    const response = await apiClient.get<MealPreference[]>(
      API_ENDPOINTS.PREFERENCES.BY_DATE(date)
    );
    return response.data || [];
  }

  /**
   * Get preferences by week
   */
  async getPreferencesByWeek(weekStart: string): Promise<MealPreference[]> {
    const response = await apiClient.get<MealPreference[]>(
      API_ENDPOINTS.PREFERENCES.BY_WEEK(weekStart)
    );
    return response.data || [];
  }

  /**
   * Create meal preference
   */
  async createPreference(data: CreatePreferenceData): Promise<MealPreference> {
    const response = await apiClient.post<MealPreference>(
      API_ENDPOINTS.PREFERENCES.CREATE,
      data
    );
    return response.data!;
  }

  /**
   * Update meal preference
   */
  async updatePreference(
    id: string,
    data: Partial<CreatePreferenceData>
  ): Promise<MealPreference> {
    const response = await apiClient.patch<MealPreference>(
      API_ENDPOINTS.PREFERENCES.UPDATE(id),
      data
    );
    return response.data!;
  }

  /**
   * Delete meal preference
   */
  async deletePreference(id: string): Promise<void> {
    await apiClient.delete(API_ENDPOINTS.PREFERENCES.DELETE(id));
  }
}

export const mealService = new MealService();

