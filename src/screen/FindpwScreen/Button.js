import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import Colors from '../../constants/Color';

const Button = ({text, style, navigation}) => {
  const screen = {
    비밀번호 찾기: 'Verifycode',
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
    backgroundColor: Colors.GREY_SECONDARY,
    height: 32,
    justifyContent: 'center',
  },
  text: {
    color: Colors.BLACK,
    fontSize: 15,
  },
});

export default Button;
