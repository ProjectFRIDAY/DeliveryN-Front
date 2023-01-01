import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Colors from '../../constants/Color';
import Button from './Button';
import CustomTextInput from './CustomTextInput';
import Divider from './Divider';
import SubmitButton from './SubmitButton';

const SignupScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.generalSignup}>
        <Text style={styles.title}>회원가입</Text>
        <CustomTextInput placeholder="이메일" style={{marginBottom: 15}} />
        <CustomTextInput placeholder="비밀번호" style={{marginBottom: 15}} />
        <CustomTextInput placeholder="비밀번호 재입력" style={{marginBottom: 15}} />
        <CustomTextInput placeholder="닉네임" style={{marginBottom: 20}} />
        <SubmitButton text="확인" />
      </View>
      <Divider />
      <View style={styles.socialSignup}>
        <Text style={styles.title}>SNS 간편 회원가입</Text>
        <Button text="카카오로 시작하기" style={{marginBottom: 15}} />
        <Button text="구글로 시작하기" style={{marginBottom: 15}} />
        <Button text="네이버로 시작하기" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  generalSignup: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  input: {},
  screen: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
  socialSignup: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  title: {alignSelf: 'flex-start', fontSize: 20, fontWeight: '700', marginBottom: 20},
});

export default SignupScreen;
