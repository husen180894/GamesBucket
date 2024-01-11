import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainStack from './src/screens/Stacks/MainStack';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: '600',
    fontFamily: 'Mulish',
    color: '#342424',
  },
});
