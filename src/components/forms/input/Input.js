import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';


export default function Input({ onChangeText }) {
  return (
    <TextInput
      onChangeText={onChangeText}
    />
  );
}

Input.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};
