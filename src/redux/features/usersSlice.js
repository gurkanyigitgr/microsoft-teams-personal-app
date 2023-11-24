import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../../components/Users/Users';

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
