// @flow

import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import type { InputProps } from './props';

export default function Input({ onChangeText, placeholder, secure }: InputProps) {
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secure}
    />
  );
}

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  secure: PropTypes.bool,
};

Input.defaultProps = {
  secure: false,
};
