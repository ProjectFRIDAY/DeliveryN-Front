import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Colors from '../../constants/Color';
import CustomTextInput from '../SignupScreen/CustomTextInput';
import SubmitButton from '../SignupScreen/SubmitButton';

const AuthPhoneScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>휴대폰 인증</Text>
      <Text style={styles.description}>
        휴대폰 인증을 위한 과정입니다{'\n'}전화번호로 전송된 인증번호 4자리를 입력해주세요
      </Text>
      <CustomTextInput placeholder="전화번호" style={{marginBottom: 18}} />
      <CustomTextInput placeholder="인증번호" style={{marginBottom: 46}} />
      <View style={styles.buttonContainer}>
        <SubmitButton text="재발송" />
        <SubmitButton text="확인" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  description: {
    alignSelf: 'flex-start',
    fontSize: 14,
    marginBottom: 46,
  },
  screen: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    flex: 1,
    paddingHorizontal: 17,
    paddingVertical: 50,
    position: 'relative',
  },
  title: {alignSelf: 'flex-start', fontSize: 20, fontWeight: '700', marginBottom: 18},
});

export default AuthPhoneScreen;
