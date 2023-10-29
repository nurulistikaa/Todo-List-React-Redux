import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './recuders';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
