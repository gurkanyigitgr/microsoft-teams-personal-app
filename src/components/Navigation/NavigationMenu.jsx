import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../redux/features/navigationSlice';

import Trivia from '../Trivia/Trivia';
import Book from '../Book/Book';
import Coin from '../Coin/Coin';

import {
  makeStyles,
  shorthands,
  Tab,
  TabList,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    ...shorthands.padding('30px', '25px'),
    backgroundColor: '#272829',
    rowGap: '20px',
    height: '100%',
    width: '100%',
    color: '#fff',
  },
});

const NavigationMenu = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.navigation.activeTab);

  const handleTriviaClick = () => {
    dispatch(setActiveTab('trivia'));
  };

  const handleBookClick = () => {
    dispatch(setActiveTab('book'));
  };
  const handleCoinClick = () => {
    dispatch(setActiveTab('coin'));
  };
  return (
    <div className={styles.root}>
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
    </div>
  );
};

export default NavigationMenu;
