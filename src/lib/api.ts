// SuperOffice KSA - API Client

import { APP_CONFIG, API_ENDPOINTS, ERROR_MESSAGES } from './constants';
import type { APIResponse, User, Service, Booking, Payment, Notification } from '@/types';

class APIClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string = APP_CONFIG.apiUrl) {
    this.baseURL = baseURL;
    
    // Initialize token from localStorage if available
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('superoffice_token');
    }
  }

  private async request<T = any>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<APIResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add authorization header if token exists
    if (this.token) {
      (config.headers as Record<string, string>)['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        if (response.status === 401) {
          this.clearToken();
          throw new Error(ERROR_MESSAGES.UNAUTHORIZED);
        }
        
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || ERROR_MESSAGES.GENERIC);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API Error [${endpoint}]:`, error);
      
      if (error instanceof TypeError) {
        throw new Error(ERROR_MESSAGES.NETWORK);
      }
      
      throw error;
    }
  }

  // Token management
  setToken(token: string): void {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('superoffice_token', token);
    }
  }

  clearToken(): void {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('superoffice_token');
      localStorage.removeItem('superoffice_user');
    }
  }

  getToken(): string | null {
    return this.token;
  }

  // HTTP Methods
  async get<T = any>(endpoint: string, params?: Record<string, any>): Promise<APIResponse<T>> {
    let url = endpoint;
    
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          searchParams.append(key, String(value));
        }
      });
      url += `?${searchParams.toString()}`;
    }
    
    return this.request<T>(url, { method: 'GET' });
  }

  async post<T = any>(endpoint: string, data?: any): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T = any>(endpoint: string, data?: any): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T = any>(endpoint: string, data?: any): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T = any>(endpoint: string): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // File upload
  async upload<T = any>(endpoint: string, formData: FormData): Promise<APIResponse<T>> {
    const config: RequestInit = {
      method: 'POST',
      body: formData,
      headers: {},
    };

    if (this.token) {
      (config.headers as Record<string, string>)['Authorization'] = `Bearer ${this.token}`;
    }

    const url = `${this.baseURL}${endpoint}`;
    
    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        if (response.status === 401) {
          this.clearToken();
          throw new Error(ERROR_MESSAGES.UNAUTHORIZED);
        }
        
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || ERROR_MESSAGES.GENERIC);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Upload Error [${endpoint}]:`, error);
      throw error;
    }
  }

  // Authentication endpoints
  async login(email: string, password: string): Promise<APIResponse<{ user: User; token: string }>> {
    const response = await this.post(API_ENDPOINTS.LOGIN, { email, password });
    
    if (response.success && response.data) {
      this.setToken(response.data.token);
      
      // Store user data
      if (typeof window !== 'undefined') {
        localStorage.setItem('superoffice_user', JSON.stringify(response.data.user));
      }
    }
    
    return response;
  }

  async register(userData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  }): Promise<APIResponse<{ user: User; token: string }>> {
    const response = await this.post(API_ENDPOINTS.REGISTER, userData);
    
    if (response.success && response.data) {
      this.setToken(response.data.token);
      
      // Store user data
      if (typeof window !== 'undefined') {
        localStorage.setItem('superoffice_user', JSON.stringify(response.data.user));
      }
    }
    
    return response;
  }

  async logout(): Promise<void> {
    try {
      await this.post(API_ENDPOINTS.LOGOUT);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearToken();
    }
  }

  async refreshToken(): Promise<APIResponse<{ token: string }>> {
    const response = await this.post(API_ENDPOINTS.REFRESH_TOKEN);
    
    if (response.success && response.data) {
      this.setToken(response.data.token);
    }
    
    return response;
  }

  async verifyOTP(phone: string, otp: string): Promise<APIResponse<{ user: User; token: string }>> {
    return this.post(API_ENDPOINTS.VERIFY_OTP, { phone, otp });
  }

  async socialLogin(provider: string, token: string): Promise<APIResponse<{ user: User; token: string }>> {
    return this.post(API_ENDPOINTS.SOCIAL_LOGIN, { provider, token });
  }

  // User endpoints
  async getProfile(): Promise<APIResponse<User>> {
    return this.get<User>(API_ENDPOINTS.PROFILE);
  }

  async updateProfile(userData: Partial<User>): Promise<APIResponse<User>> {
    return this.put<User>(API_ENDPOINTS.UPDATE_PROFILE, userData);
  }

  async uploadAvatar(file: File): Promise<APIResponse<{ url: string }>> {
    const formData = new FormData();
    formData.append('avatar', file);
    return this.upload<{ url: string }>(API_ENDPOINTS.UPLOAD_AVATAR, formData);
  }

  // Services endpoints
  async getServices(filters?: Record<string, any>): Promise<APIResponse<Service[]>> {
    return this.get<Service[]>(API_ENDPOINTS.SERVICES, filters);
  }

  async getService(id: string): Promise<APIResponse<Service>> {
    return this.get<Service>(API_ENDPOINTS.SERVICE_DETAIL.replace(':id', id));
  }

  async getServiceAvailability(serviceId: string, date: Date): Promise<APIResponse<any>> {
    return this.get(API_ENDPOINTS.SERVICE_AVAILABILITY.replace(':id', serviceId), {
      date: date.toISOString().split('T')[0]
    });
  }

  async searchServices(query: string, filters?: Record<string, any>): Promise<APIResponse<Service[]>> {
    return this.get<Service[]>(API_ENDPOINTS.SEARCH_SERVICES, { q: query, ...filters });
  }

  // Branches endpoints
  async getBranches(): Promise<APIResponse<any[]>> {
    return this.get<any[]>(API_ENDPOINTS.BRANCHES);
  }

  async getBranch(id: string): Promise<APIResponse<any>> {
    return this.get(API_ENDPOINTS.BRANCH_DETAIL.replace(':id', id));
  }

  // Bookings endpoints
  async getBookings(filters?: Record<string, any>): Promise<APIResponse<Booking[]>> {
    return this.get<Booking[]>(API_ENDPOINTS.BOOKINGS, filters);
  }

  async createBooking(bookingData: any): Promise<APIResponse<Booking>> {
    return this.post<Booking>(API_ENDPOINTS.CREATE_BOOKING, bookingData);
  }

  async getBooking(id: string): Promise<APIResponse<Booking>> {
    return this.get<Booking>(API_ENDPOINTS.BOOKING_DETAIL.replace(':id', id));
  }

  async cancelBooking(id: string, reason?: string): Promise<APIResponse<Booking>> {
    return this.patch<Booking>(API_ENDPOINTS.CANCEL_BOOKING.replace(':id', id), { reason });
  }

  async checkAvailability(serviceId: string, startDate: Date, endDate: Date): Promise<APIResponse<any>> {
    return this.post(API_ENDPOINTS.CHECK_AVAILABILITY, {
      serviceId,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString()
    });
  }

  // Payments endpoints
  async processPayment(paymentData: any): Promise<APIResponse<Payment>> {
    return this.post<Payment>(API_ENDPOINTS.PROCESS_PAYMENT, paymentData);
  }

  async getPaymentStatus(paymentId: string): Promise<APIResponse<Payment>> {
    return this.get<Payment>(API_ENDPOINTS.PAYMENT_STATUS.replace(':id', paymentId));
  }

  async getPaymentHistory(filters?: Record<string, any>): Promise<APIResponse<Payment[]>> {
    return this.get<Payment[]>(API_ENDPOINTS.PAYMENT_HISTORY, filters);
  }

  // Notifications endpoints
  async getNotifications(filters?: Record<string, any>): Promise<APIResponse<Notification[]>> {
    return this.get<Notification[]>(API_ENDPOINTS.NOTIFICATIONS, filters);
  }

  async markNotificationRead(id: string): Promise<APIResponse<void>> {
    return this.patch(API_ENDPOINTS.MARK_READ.replace(':id', id));
  }

  async updateNotificationPreferences(preferences: any): Promise<APIResponse<void>> {
    return this.put(API_ENDPOINTS.NOTIFICATION_PREFERENCES, preferences);
  }

  // Support endpoints
  async createChatSession(): Promise<APIResponse<any>> {
    return this.post(API_ENDPOINTS.CREATE_CHAT);
  }

  async sendChatMessage(sessionId: string, message: string): Promise<APIResponse<any>> {
    return this.post(API_ENDPOINTS.SEND_MESSAGE.replace(':id', sessionId), { message });
  }

  async getFAQ(): Promise<APIResponse<any[]>> {
    return this.get(API_ENDPOINTS.FAQ);
  }

  // Events endpoints
  async getEvents(filters?: Record<string, any>): Promise<APIResponse<any[]>> {
    return this.get(API_ENDPOINTS.EVENTS, filters);
  }

  async getEvent(id: string): Promise<APIResponse<any>> {
    return this.get(API_ENDPOINTS.EVENT_DETAIL.replace(':id', id));
  }

  async registerForEvent(eventId: string): Promise<APIResponse<any>> {
    return this.post(API_ENDPOINTS.REGISTER_EVENT.replace(':id', eventId));
  }

  // Loyalty endpoints
  async getLoyaltyStatus(): Promise<APIResponse<any>> {
    return this.get(API_ENDPOINTS.LOYALTY);
  }

  async redeemReward(rewardId: string): Promise<APIResponse<any>> {
    return this.post(API_ENDPOINTS.REDEEM_REWARD, { rewardId });
  }

  // NFC endpoints
  async getNFCCards(): Promise<APIResponse<any[]>> {
    return this.get(API_ENDPOINTS.NFC_CARDS);
  }

  async validateAccess(cardId: string, location: string): Promise<APIResponse<any>> {
    return this.post(API_ENDPOINTS.VALIDATE_ACCESS, { cardId, location });
  }

  // Dynamic content endpoints
  async getDynamicContent(key?: string): Promise<APIResponse<any>> {
    return this.get(key ? API_ENDPOINTS.UPDATE_CONTENT.replace(':key', key) : API_ENDPOINTS.DYNAMIC_CONTENT);
  }

  async getBanners(): Promise<APIResponse<any[]>> {
    return this.get(API_ENDPOINTS.BANNERS);
  }

  async getPromotions(): Promise<APIResponse<any[]>> {
    return this.get(API_ENDPOINTS.PROMOTIONS);
  }
}

// Create and export singleton instance
const apiClient = new APIClient();

export default apiClient;

// Export utility functions
export const setAuthToken = (token: string) => apiClient.setToken(token);
export const clearAuthToken = () => apiClient.clearToken();
export const getAuthToken = () => apiClient.getToken();

// Helper functions for common operations
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const userData = localStorage.getItem('superoffice_user');
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return !!getAuthToken() && !!getCurrentUser();
};

export const handleAPIError = (error: any): string => {
  console.error('API Error:', error);
  
  if (typeof error === 'string') {
    return error;
  }
  
  if (error?.message) {
    return error.message;
  }
  
  return ERROR_MESSAGES.GENERIC;
};