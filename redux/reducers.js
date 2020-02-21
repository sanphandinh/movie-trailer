import { combineReducers } from 'redux';
import genresReducer from './slices/genresSlices';
import configurationReducer from './slices/configurationSlices';

export default combineReducers({
  genres: genresReducer,
  configuration: configurationReducer
});
