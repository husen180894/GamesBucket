import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';
import {Button} from '@rneui/themed';
import {EmojiHappy} from 'iconsax-react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.text}>Hello Developer</Text>
        <Button>
          <EmojiHappy color="#fff" variant="Broken" size={34} />
        </Button>
      </ScrollView>
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
