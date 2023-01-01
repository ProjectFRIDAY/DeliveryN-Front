import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import Colors from '../../constants/Color';

const CustomTextInput = ({placeholder, style}) => {
  return <TextInput style={[styles.input, style]} placeholder={placeholder} />;
};

const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    backgroundColor: Colors.GREY_PRIMARY,
    color: Colors.BLACK,
    fontSize: 13,
    height: 32,
    paddingHorizontal: 6,
  },
});

export default CustomTextInput;
