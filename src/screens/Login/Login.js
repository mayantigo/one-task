// @flow

import React from 'react';
import { View, Text } from 'react-native';
import Input from '../../components/forms/input';

export default function Login() {
  return (
    <View>
      <Text>
        Login
      </Text>
      <Input
        onChangeText={(text: string) => console.log(text)}
        placeholder="Email"
      />
      <Input
        onChangeText={(text: string) => console.log(text)}
        placeholder="Password"
        secure
      />
    </View>
  );
}
