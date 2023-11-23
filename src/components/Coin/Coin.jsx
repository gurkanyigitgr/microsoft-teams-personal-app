import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/search/trending'
  );
  const data = response.data;
  console.log(data);
  return data;
});
export default function Coin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const handleFetchCoins = () => {
    dispatch(fetchCoins());
  };
  return <button onClick={() => handleFetchCoins()}>Coin</button>;
}
