import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Colors from '../../constants/Color';
import Button from './Button';

const StartScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.subTitle}>혼자 시키기 부담될 때?</Text>
        <Text style={styles.title}>배달N</Text>
      </View>
      <Button text="로그인" style={{marginBottom: 23}} navigation={navigation} />
      <Button text="회원가입" navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 150,
    justifyContent: 'space-between',
    position: 'absolute',
    top: '50%',
  },
  screen: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 17,
    paddingVertical: 50,
    position: 'relative',
  },
  subTitle: {fontSize: 20, fontWeight: '600'},
  title: {
    fontSize: 64,
    fontWeight: '800',
    shadowColor: Colors.BLACK,
    shadowOffset: {height: 3},
    shadowOpacity: 0.25,
  },
});

export default StartScreen;
