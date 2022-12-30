import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignupScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>회원가입 스크린</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignupScreen;
