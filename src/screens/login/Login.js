// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Input from '../../components/forms/input';
import type { LoginProps } from './props';
import type { LoginState } from './state';

export default class Login extends Component<LoginProps, LoginState> {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  login() {
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <View>
        <Text>
          Login
        </Text>
        <Input
          onChangeText={(email: string) => this.setState({ email })}
          placeholder="Email"
        />
        <Input
          onChangeText={(password: string) => this.setState({ password })}
          placeholder="Password"
          secure
        />
      </View>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
