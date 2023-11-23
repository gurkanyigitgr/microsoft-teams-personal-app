import React from 'react';
import NavigationMenu from './Navigation/NavigationMenu';
import Content from './content/Content';

export default function App() {
  return (
    <div className='h-screen w-screen flex flex-col md:flex-row'>
      <div className='w-full md:w-44 h-auto md:h-screen'>
        <NavigationMenu />
      </div>
      <div className='container mx-auto w-full h-screen flex items-center'>
        <Content />
      </div>
    </div>
  );
}
