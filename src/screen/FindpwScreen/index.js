import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Colors from '../../constants/Color';
import Button from './Button';

const FindpwScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.logo}>배달N</Text>
      <Text style={styles.title}>비밀번호 찾기</Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>이름</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>전화번호</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>이메일</Text>
          <TextInput style={styles.input}/>
        </View>
      </View>
      <Button text="비밀번호 찾기" style={{bottom: '45%'}} navigation={navigation} />
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
  inputContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: Colors.BLACK,
    borderWidth: 1,
    width: '80%',
    height: 32,
    justifyContent: 'center',
  },
  inputTitle: {
    color: Colors.BLACK,
    fontSize: 15,
  },
});

export default FindpwScreen;
