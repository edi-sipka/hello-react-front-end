/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './Message/message';

const store = configureStore({
  reducer: {
    message: messageReducer,
  }
});

export default store;
