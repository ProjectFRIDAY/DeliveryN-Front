import React, {useRef} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Colors from '../../constants/Color';
import Button from './Button';

const email = "12345@gmail.com";

const VerifycodeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.logo}>배달N</Text>
      <Text style={styles.title}>비밀번호 찾기</Text>
      <View style={styles.container}>
        <View style={styles.subtitle}>
          <Text style={styles.email}>{email} 로</Text>
          <Text style={styles.send}>인증번호가 발송되었습니다</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}/>
        </View>
      </View>
      <Text style={styles.timer}>타이머</Text>
      <Button text="재발송" navigation={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: 'space-between',
    position: 'absolute',
    top: '30%',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 17,
    paddingVertical: 50,
    position: 'relative',
  },
  logo: {
    alignSelf: 'center',
    fontSize: 50,
    fontWeight: '600',
    position: 'absolute',
    top: '5%',
  },
  title: {
    alignSelf: 'stretch',
    fontSize: 20,
    fontWeight: '600',
    position: 'absolute',
    top: '20%',
    left: '5%',
  },
  email: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '800',
  },
  send: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '300',
  },
  inputContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: Colors.BLACK,
    fontSize: 24,
    width: '100%',
    borderBottomWidth: 1,
    height: 32,
    justifyContent: 'center',
  },

});

export default VerifycodeScreen;
