import React from 'react';
import { useSelector } from 'react-redux';
import TriviaContent from '../Trivia/TriviaContent';
import BookContent from '../Book/BookContent';
import CoinContent from '../Coin/CoinContent';

const Content = () => {
  const activeTab = useSelector((state) => state.navigation.activeTab);

  return (
    <div className='container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 '>
      {activeTab === 'trivia' && <TriviaContent />}
      {activeTab === 'book' && <BookContent />}
      {activeTab === 'coin' && <CoinContent />}
    </div>
  );
};

export default Content;
