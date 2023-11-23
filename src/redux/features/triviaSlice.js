import { createSlice } from '@reduxjs/toolkit';
import { fetchTrivia } from '../../components/Trivia/Trivia';

const triviaSlice = createSlice({
  name: 'trivia',
  initialState: {
    categories: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrivia.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(fetchTrivia.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchTrivia.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default triviaSlice.reducer;
