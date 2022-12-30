import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import Colors from '../../constants/Color';

const Button = ({text, style, navigation}) => {
  const screen = {
    로그인: 'Signin',
    회원가입: 'Signup',
  }[text];

  const handlePress = () => {
    navigation.navigate(screen);
  };

  return (
    <Pressable style={[styles.container, style]} onPress={handlePress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderColor: Colors.Black,
    borderWidth: 1,
    height: 32,
    justifyContent: 'center',
  },
  text: {
    color: Colors.Black,
    fontSize: 15,
  },
});

export default Button;
