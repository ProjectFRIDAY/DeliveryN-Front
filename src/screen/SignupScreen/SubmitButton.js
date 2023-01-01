import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import Colors from '../../constants/Color';

const SubmitButton = ({text, style, textStyle}) => {
  return (
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed, style]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.GREY_SECONDARY,
    height: 34,
    justifyContent: 'center',
    width: 84,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
  },
});

export default SubmitButton;
