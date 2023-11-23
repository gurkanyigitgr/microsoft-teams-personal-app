import React from 'react';
import { useSelector } from 'react-redux';

const ThemeProvider = ({ children }) => {
  const currentTheme = useSelector((state) => state.theme.mode);
  const themeClass = currentTheme === 'dark' ? 'dark' : 'light';
  return <div className={themeClass}>{children}</div>;
};

export default ThemeProvider;
