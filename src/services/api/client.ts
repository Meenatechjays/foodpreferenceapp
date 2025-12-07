/**
 * API client with Axios - configured with interceptors
 */

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { API_CONFIG } from '../../config/api';
import { ENV } from '../../config/env';
import { storageService } from '../storage/storageService';
import type { ApiResponse, ApiError } from '../../types/api';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      headers: API_CONFIG.HEADERS,
    });

    this.setupInterceptors();
  }

  /**
   * Setup request and response interceptors
   */
  private setupInterceptors(): void {
    // Request interceptor - Add auth token to requests
    this.client.interceptors.request.use(
      async (config) => {
        // Get token from storage
        const token = await storageService.getItem<string>(
          ENV.STORAGE_KEYS.AUTH_TOKEN
        );

        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // Log request in development
        if (ENV.ENABLE_LOGGING) {
          console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`, {
            params: config.params,
            data: config.data,
          });
        }

        return config;
      },
      (error: AxiosError) => {
        if (ENV.ENABLE_LOGGING) {
          console.error('[API Request Error]', error);
        }
        return Promise.reject(error);
      }
    );

    // Response interceptor - Handle responses and errors
    this.client.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        if (ENV.ENABLE_LOGGING) {
          console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`, {
            status: response.status,
            data: response.data,
          });
        }

        // Handle API response format
        if (response.data && typeof response.data === 'object') {
          // If response has success field, check it
          if ('success' in response.data && !response.data.success) {
            const error: ApiError = {
              code: response.data.error?.code || 'API_ERROR',
              message: response.data.error?.message || response.data.message || 'API request failed',
              details: response.data.error?.details,
            };
            return Promise.reject(error);
          }
        }

        return response;
      },
      async (error: AxiosError<ApiResponse>) => {
        if (ENV.ENABLE_LOGGING) {
          console.error('[API Response Error]', {
            url: error.config?.url,
            status: error.response?.status,
            data: error.response?.data,
          });
        }

        // Handle different error scenarios
        if (error.response) {
          // Server responded with error status
          const status = error.response.status;
          const data = error.response.data;

          // Handle 401 Unauthorized - Clear auth and redirect to login
          if (status === 401) {
            await storageService.removeItem(ENV.STORAGE_KEYS.AUTH_TOKEN);
            await storageService.removeItem(ENV.STORAGE_KEYS.USER_DATA);
            // TODO: Navigate to login screen
          }

          // Extract error from response
          const apiError: ApiError = {
            code: data?.error?.code || `HTTP_${status}`,
            message: data?.error?.message || data?.message || error.message,
            details: data?.error?.details,
          };

          return Promise.reject(apiError);
        } else if (error.request) {
          // Request was made but no response received
          const apiError: ApiError = {
            code: 'NETWORK_ERROR',
            message: 'Network error. Please check your connection.',
          };
          return Promise.reject(apiError);
        } else {
          // Something else happened
          const apiError: ApiError = {
            code: 'UNKNOWN_ERROR',
            message: error.message || 'An unexpected error occurred',
          };
          return Promise.reject(apiError);
        }
      }
    );
  }

  /**
   * GET request
   */
  async get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.get<ApiResponse<T>>(url, config);
    return response.data;
  }

  /**
   * POST request
   */
  async post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.post<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  /**
   * PUT request
   */
  async put<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.put<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  /**
   * PATCH request
   */
  async patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.patch<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  /**
   * DELETE request
   */
  async delete<T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response = await this.client.delete<ApiResponse<T>>(url, config);
    return response.data;
  }

  /**
   * Get the underlying Axios instance (for advanced use cases)
   */
  getInstance(): AxiosInstance {
    return this.client;
  }
}

export const apiClient = new ApiClient();

