// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Input } from '../../components/forms';
import type { LoginProps } from './props';
import type { LoginState } from './state';
import styles from './styles';

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
      <View style={styles.Login}>
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
        <Button text="Login" onPress={() => this.login()} />
      </View>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
