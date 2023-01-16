import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

import Colors from './Color';

const Button = ({text, style, navigation}) => {
  const screen = {
    재발송: 'Findpw',
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
    position : 'absolute',
    top: '70%',
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    color: Colors.BLACK,
    fontSize: 15,
  },
});

export default Button;