import { configureStore } from '@reduxjs/toolkit';
import triviaReducer from './features/triviaSlice';
import bookReducer from './features/bookSlice';
import navigationReducer from './features/navigationSlice';
import coinReducer from './features/coinSlice';
import themeReducer from './features/themeSlice';
const store = configureStore({
  reducer: {
    trivia: triviaReducer,
    book: bookReducer,
    navigation: navigationReducer,
    coins: coinReducer,
    theme: themeReducer,
  },
});
export default store;
