import { createSlice } from '@reduxjs/toolkit';
import { fetchBook } from '../../components/Book/Book';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
