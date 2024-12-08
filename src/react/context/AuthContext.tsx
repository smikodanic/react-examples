import { createContext, useContext, useState } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}


// Create AuthContext
const AuthContext = createContext<IAuthContext | undefined>(undefined);


// AuthProvider component
export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Check if the auth_jwtToken cookie exists on initialization
    return document.cookie.includes('auth_jwtToken');
  });

  // Login and logout functions
  const login = () => {
    document.cookie = 'auth_jwtToken=true; path=/';  // Set cookie
    setIsAuthenticated(true);
  };

  const logout = () => {
    document.cookie = 'auth_jwtToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';  // Remove cookie
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


// Custom hook to use auth context
export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (!context) { throw new Error('useAuth must be used within an AuthProvider'); }
  return context;
};
