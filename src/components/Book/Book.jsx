import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBook = createAsyncThunk('book/fetchBook', async () => {
  const response = await axios.get(
    'https://openlibrary.org/works/OL45804W.json'
  );
  const data = response.data;
  console.log(data);
  return data;
});

export default function Book() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  const handleFetchBook = () => {
    dispatch(fetchBook());
  };
  return <button onClick={() => handleFetchBook()}>Book</button>;
}
