import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../redux/features/navigationSlice';

import Trivia from '../Trivia/Trivia';
import Book from '../Book/Book';
import Coin from '../Coin/Coin';
import User from '../Users/Users';

import { WeatherMoon24Filled } from '@fluentui/react-icons';
import { WeatherSunny24Regular } from '@fluentui/react-icons';

import { Divider, Tab, TabList } from '@fluentui/react-components';
import { toggleTheme } from '../../redux/features/themeSlice';

const NavigationMenu = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.navigation.activeTab);
  const currentTheme = useSelector((state) => state.theme.mode);

  const handleHomeClick = () => {
    dispatch(setActiveTab('home'));
  };

  const handleTriviaClick = () => {
    dispatch(setActiveTab('trivia'));
  };

  const handleBookClick = () => {
    dispatch(setActiveTab('book'));
  };
  const handleCoinClick = () => {
    dispatch(setActiveTab('coin'));
  };
  const handleUserClick = () => {
    dispatch(setActiveTab('user'));
  };
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <div
      className='h-full flex flex-col justify-between items-center w-full'
      style={
        currentTheme === 'dark'
          ? { backgroundColor: '#272829', color: '#fff' }
          : {
              backgroundColor: '#F0F0F0',
              color: '#000',
            }
      }
    >
      <div className='mt-2 w-full '>
        <button
          onClick={handleHomeClick}
          className={`w-full text-center font-semibold mb-2 ${
            activeTab === 'home' ? 'text-[#00ACC4]' : ''
          }`}
        >
          Home
        </button>
        <h3
          className='cursor-pointer font-semibold text-center'
          onClick={handleTriviaClick}
        >
          API
        </h3>
        <Divider style={{ height: '1px' }} />
        <TabList
          defaultSelectedValue='tab1'
          vertical
          className='space-y-2 ml-1'
        >
          <Tab value='tab1' onClick={handleTriviaClick}>
            <div
              className={`${
                activeTab === 'trivia'
                  ? 'border-l-2 border-[#00ACC4] pl-2 font-bold text-[#00ACC4]'
                  : ''
              }`}
            >
              <Trivia />
            </div>
          </Tab>
          <Tab value='tab2' onClick={handleBookClick}>
            <div
              className={`${
                activeTab === 'book'
                  ? 'border-l-2 border-[#00ACC4] pl-2 font-bold text-[#00ACC4]'
                  : ''
              }`}
            >
              <Book />
            </div>
          </Tab>
          <Tab value='tab3' onClick={handleCoinClick}>
            <div
              className={`${
                activeTab === 'coin'
                  ? 'border-l-2 border-[#00ACC4] pl-2 font-bold text-[#00ACC4]'
                  : ''
              }`}
            >
              <Coin />
            </div>
          </Tab>
          <Tab value='tab1' onClick={handleUserClick}>
            <div
              className={`${
                activeTab === 'user'
                  ? 'border-l-2 border-[#00ACC4] pl-2 font-bold text-[#00ACC4]'
                  : ''
              }`}
            >
              <User />
            </div>
          </Tab>
        </TabList>
      </div>
      <div
        onClick={handleThemeToggle}
        className='cursor-pointer transition-all text-left w-full duration-500 ml-4 mb-3'
      >
        {currentTheme === 'dark' ? (
          <WeatherSunny24Regular />
        ) : (
          <WeatherMoon24Filled primaryFill />
        )}
      </div>
    </div>
  );
};

export default NavigationMenu;
