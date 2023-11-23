import React from 'react';
import { useSelector } from 'react-redux';
import TriviaContent from '../Trivia/TriviaContent';
import BookContent from '../Book/BookContent';
import CoinContent from '../Coin/CoinContent';

const Content = () => {
  const activeTab = useSelector((state) => state.navigation.activeTab);
  const coins = useSelector((state) => state.coins.coins.coins);
  const nfts = useSelector((state) => state.coins.nfts.nfts);
  console.log(nfts);
  return (
    <div className='container mx-auto flex flex-col items-center justify-center'>
      <div className='w-full'>
        {activeTab === 'trivia' && <TriviaContent />}
      </div>
      <div>{activeTab === 'book' && <BookContent />}</div>
      <div>{activeTab === 'coin' && <CoinContent />}</div>
    </div>
  );
};

export default Content;
