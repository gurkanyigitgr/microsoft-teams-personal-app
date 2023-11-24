import React from 'react';
import NavigationMenu from './Navigation/NavigationMenu';
import { useSelector } from 'react-redux';
import Content from './content/Content';

export default function App() {
  const currentTheme = useSelector((state) => state.theme.mode);
  return (
    <div
      className={`h-screen w-screen flex flex-col md:flex-row ${
        currentTheme === 'dark' ? 'bg-[#0f0f0f]' : 'bg-[#e5e7eb]'
      }`}
    >
      <div className='w-full md:w-[100px] mb-10 md:mb-0'>
        <NavigationMenu />
      </div>
      <Content />
    </div>
  );
}
