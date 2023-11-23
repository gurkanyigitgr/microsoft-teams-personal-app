import { createSlice } from '@reduxjs/toolkit';
import { fetchCoins } from '../../components/Coin/Coin';

const coinSlice = createSlice({
  name: 'coin',
  initialState: {
    coins: [],
    nfts: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coins = action.payload;
        state.nfts = action.payload;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default coinSlice.reducer;
