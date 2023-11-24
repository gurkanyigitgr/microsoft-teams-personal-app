import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  const data = response.data;
  return data;
});

export default function User() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFetchCoins = () => {
    dispatch(fetchUsers());
  };
  return <button onClick={handleFetchCoins}>Users</button>;
}
