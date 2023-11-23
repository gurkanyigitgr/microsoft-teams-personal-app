import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrivia = createAsyncThunk('trivia/fetchTrivia', async () => {
  const response = await axios.get('https://opentdb.com/api_category.php');
  const data = response.data.trivia_categories;
  console.log(response.data.trivia_categories);
  return data;
});
export default function Trivia() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrivia());
  }, [dispatch]);
  const handleFetchTrivia = () => {
    dispatch(fetchTrivia());
  };
  return <button onClick={handleFetchTrivia}>Trivia</button>;
}
