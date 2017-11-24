// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Route, AndroidBackButton } from 'react-router-native';
import store from './src/reducers';
import Login from './src/containers/Login';

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <AndroidBackButton>
          <Route path="/" exact component={Login} />
        </AndroidBackButton>
      </NativeRouter>
    </Provider>
  );
}
