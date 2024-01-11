import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Got To Home</Button>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
