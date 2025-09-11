'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@/types';
import apiClient, { getCurrentUser, isAuthenticated } from '@/lib/api';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<User>) => Promise<void>;
  refreshUser: () => Promise<void>;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      setIsLoading(true);
      
      // Check if user is already authenticated
      if (isAuthenticated()) {
        const userData = getCurrentUser();
        if (userData) {
          setUser(userData);
          
          // Optionally refresh user data from server
          try {
            const response = await apiClient.getProfile();
            if (response.success && response.data) {
              setUser(response.data);
              // Update stored user data
              if (typeof window !== 'undefined') {
                localStorage.setItem('superoffice_user', JSON.stringify(response.data));
              }
            }
          } catch (error) {
            console.log('Failed to refresh user data:', error);
            // Continue with stored user data
          }
        }
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
      // Clear invalid auth data
      apiClient.clearToken();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await apiClient.login(email, password);
      
      if (response.success && response.data) {
        setUser(response.data.user);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      setIsLoading(true);
      const response = await apiClient.register(userData);
      
      if (response.success && response.data) {
        setUser(response.data.user);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await apiClient.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      apiClient.clearToken();
      setUser(null);
      setIsLoading(false);
    }
  };

  const updateUser = async (userData: Partial<User>): Promise<void> => {
    try {
      const response = await apiClient.updateProfile(userData);
      
      if (response.success && response.data) {
        setUser(response.data);
        // Update stored user data
        if (typeof window !== 'undefined') {
          localStorage.setItem('superoffice_user', JSON.stringify(response.data));
        }
      }
    } catch (error) {
      console.error('Update user error:', error);
      throw error;
    }
  };

  const refreshUser = async (): Promise<void> => {
    try {
      const response = await apiClient.getProfile();
      
      if (response.success && response.data) {
        setUser(response.data);
        // Update stored user data
        if (typeof window !== 'undefined') {
          localStorage.setItem('superoffice_user', JSON.stringify(response.data));
        }
      }
    } catch (error) {
      console.error('Refresh user error:', error);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateUser,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthProvider;