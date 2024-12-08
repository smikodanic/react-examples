import React, { ReactNode, createContext, useState } from 'react';


export const ThemeContext = createContext<string | undefined>(undefined);


type ThemeProviderProps = {
  children: ReactNode; // Allows React elements as children
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');
  // const theme = 'dark';

  return (
    <ThemeContext.Provider value={theme}>
      Simple React Examples
      {children}
    </ThemeContext.Provider>
  );
};

