import { configureStore } from '@reduxjs/toolkit';
import bookStoreReducer from './slice';

export default configureStore({
  reducer: {
    bookStore: bookStoreReducer,
  },
});