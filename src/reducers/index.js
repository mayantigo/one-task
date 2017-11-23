// @flow

import { combineReducers, createStore } from 'redux';
import profile from './profile';

// Reducers
const reducers = combineReducers({
  profile,
});

// Initial State
export const initialState = {
  profile: {
    user: {
      avatar: '',
      name: '',
    },
  },
};

export default createStore(reducers, initialState);
