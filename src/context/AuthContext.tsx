import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthContextType, AuthState, LoginCredentials, RegisterCredentials, User } from '../types/auth';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_ERROR' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode<User>(token);
          // Check if token is expired
          if (decoded.exp && decoded.exp * 1000 < Date.now()) {
            localStorage.removeItem('token');
            dispatch({ type: 'LOGOUT' });
          } else {
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: { user: decoded, token },
            });
          }
        } catch (error) {
          localStorage.removeItem('token');
          dispatch({ type: 'LOGOUT' });
        }
      }
      dispatch({ type: 'CLEAR_ERROR' });
    };

    initializeAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      // TODO: Replace with actual API call
      if (credentials.email === 'admin@system.com' && credentials.password === 'Admin@123') {
        const mockUser: User = {
          id: '1',
          fullName: 'Admin User',
          email: 'admin@system.com',
          username: 'admin',
          role: 'admin',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        const mockToken = 'mock-jwt-token';
        
        if (credentials.rememberMe) {
          localStorage.setItem('token', mockToken);
        }
        
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user: mockUser, token: mockToken },
        });
        toast.success('Login successful!');
      } else if (credentials.email === 'user@system.com' && credentials.password === 'User@123') {
        const mockUser: User = {
          id: '2',
          fullName: 'Regular User',
          email: 'user@system.com',
          username: 'user',
          role: 'user',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        const mockToken = 'mock-jwt-token-user';
        
        if (credentials.rememberMe) {
          localStorage.setItem('token', mockToken);
        }
        
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user: mockUser, token: mockToken },
        });
        toast.success('Login successful!');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error instanceof Error ? error.message : 'Login failed',
      });
      toast.error('Invalid credentials');
    }
  };

  const register = async (credentials: RegisterCredentials) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      // TODO: Replace with actual API call
      toast.success('Registration successful! Please login.');
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error instanceof Error ? error.message : 'Registration failed',
      });
      toast.error('Registration failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
    toast.success('Logged out successfully');
  };

  const forgotPassword = async (email: string) => {
    try {
      // TODO: Replace with actual API call
      toast.success('Password reset instructions sent to your email');
    } catch (error) {
      toast.error('Failed to send reset instructions');
    }
  };

  const resetPassword = async (token: string, newPassword: string) => {
    try {
      // TODO: Replace with actual API call
      toast.success('Password reset successful');
    } catch (error) {
      toast.error('Failed to reset password');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 