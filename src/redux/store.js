import { configureStore } from '@reduxjs/toolkit';
import triviaReducer from './features/triviaSlice';
import bookReducer from './features/bookSlice';
import navigationReducer from './features/navigationSlice';
import coinReducer from './features/coinSlice';
const store = configureStore({
  reducer: {
    trivia: triviaReducer,
    book: bookReducer,
    navigation: navigationReducer,
    coins: coinReducer,
  },
});
export default store;
