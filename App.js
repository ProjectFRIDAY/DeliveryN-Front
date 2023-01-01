import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AuthPhoneScreen from './src/screen/AuthPhoneScreen';
import SigninScreen from './src/screen/SigninScreen';
import SignupComplete from './src/screen/SignupCompleteScreen';
import SignupScreen from './src/screen/SignupScreen';
import StartScreen from './src/screen/StartScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator initialRouteName="SignupComplete" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="AuthPhone" component={AuthPhoneScreen} />
          <Stack.Screen name="SignupComplete" component={SignupComplete} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
