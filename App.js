// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Route, AndroidBackButton } from 'react-router-native';
import { store } from './src/reducers';

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <AndroidBackButton>
          <Route path="/" exact component={Start} />
        </AndroidBackButton>
      </NativeRouter>
    </Provider>
  );
}
