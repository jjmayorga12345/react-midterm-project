import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = {
  background: string;
  text: string;
};

type ThemeMap = {
  [key: string]: Theme;
};

const themes: ThemeMap = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#222222',
    text: '#ffffff',
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setThemeByName: (name: keyof typeof themes) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.light,
  toggleTheme: () => {},
  setThemeByName: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<keyof typeof themes>('light');
  const theme = themes[themeName];

  const toggleTheme = () => {
    setThemeName(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setThemeByName = (name: keyof typeof themes) => {
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setThemeByName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
