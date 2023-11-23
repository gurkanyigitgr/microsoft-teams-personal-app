import React from 'react';
import NavigationMenu from './Navigation/NavigationMenu';
import Content from './content/Content';
import { useSelector } from 'react-redux';

export default function App() {
  const currentTheme = useSelector((state) => state.theme.mode);
  return (
    <div
      className={`h-screen w-screen flex flex-col md:flex-row ${
        currentTheme === 'dark' ? 'bg-[#000]' : 'bg-[#e5e7eb]'
      }`}
    >
      <div className='w-full md:w-[150px] mb-10 md:mb-0'>
        <NavigationMenu />
      </div>
      <Content />
    </div>
  );
}
