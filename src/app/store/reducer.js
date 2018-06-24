import { combineReducers } from 'redux';
import { audioReducer } from './audioStore';

export const reducer = combineReducers({
  audio: audioReducer
});