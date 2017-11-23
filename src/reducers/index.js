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

export default createStore(
  combineReducers({
    profile,
  }),
  initialState,
);
