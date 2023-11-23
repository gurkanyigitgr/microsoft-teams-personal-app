import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../redux/features/navigationSlice';

import Trivia from '../Trivia/Trivia';
import Book from '../Book/Book';
import Coin from '../Coin/Coin';

import { WeatherMoon24Filled } from '@fluentui/react-icons';
import { WeatherSunny24Regular } from '@fluentui/react-icons';

import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
} from '@fluentui/react-components';
import { toggleTheme } from '../../redux/features/themeSlice';

const useStyles = makeStyles({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    ...shorthands.padding('30px', '25px'),
    rowGap: '20px',
    fontWeight: '600',
    height: '100%',
    width: '100%',
    color: '#fff',
  },
});

const NavigationMenu = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.navigation.activeTab);
  const currentTheme = useSelector((state) => state.theme.mode);

  const handleTriviaClick = () => {
    dispatch(setActiveTab('trivia'));
  };

  const handleBookClick = () => {
    dispatch(setActiveTab('book'));
  };
  const handleCoinClick = () => {
    dispatch(setActiveTab('coin'));
  };
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <div
      className={styles.root}
      style={
        currentTheme === 'dark'
          ? { backgroundColor: '#272829', color: '#fff' }
          : {
              backgroundColor: '#F0F0F0',
              color: '#000',
            }
      }
    >
      <TabList defaultSelectedValue='tab1' vertical className='space-y-2'>
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
      </TabList>
      <div
        onClick={handleThemeToggle}
        className='flex items-end h-full cursor-pointer transition-all duration-500'
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
