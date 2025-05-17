import { createContext, useContext, useState } from 'react';

export const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
  },
  neit: {
    background: '#001f3f',
    text: '#ffdc00',
  },
};

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
  setThemeByName: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  const toggleTheme = () => {
    setThemeName((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setThemeByName = (name) => {
    setThemeName(name);
  };

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeByName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
