import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Colors from '../../constants/Color';
import Button from '../SignupScreen/Button';

const SignupComplete = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>가입 완료!</Text>
      <Text style={styles.subTitle}>이제 배달메이트를 찾으러 갈 수 있어요</Text>
      <Button
        text="로그인 하기"
        style={{borderWidth: 0, backgroundColor: Colors.GREY_SECONDARY}}
        textStyle={{fontSize: 16}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Colors.WHITE,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 30,
  },
});

export default SignupComplete;
