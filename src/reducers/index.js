// @flow

import { combineReducers, createStore } from 'redux';
import profile from './profile';

export const initialState = {
  profile: {
    user: {
      avatar: '',
      name: '',
    },
  },
};

const store = createStore(
  combineReducers({
    profile,
  }),
  initialState,
);

export default store;
