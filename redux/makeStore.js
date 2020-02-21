import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const makeStore = (initState, options) => {
  return configureStore({
    reducer: reducers,
    preloadedState: initState
  });
};

export default makeStore;
