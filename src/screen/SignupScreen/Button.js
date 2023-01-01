import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import Colors from '../../constants/Color';

const Button = ({text, style}) => {
  return (
    <Pressable style={[styles.button, style]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderColor: Colors.BLACK,
    borderWidth: 1,
    height: 32,
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
  },
});

export default Button;
