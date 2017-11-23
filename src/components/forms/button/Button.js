// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

export default function Button({ onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: PropTypes.fun.isRequired,
  text: PropTypes.string.isRequired,
};
