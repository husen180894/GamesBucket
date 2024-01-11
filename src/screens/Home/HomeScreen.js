import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

const HomeScreen = props => {
  const {navigation} = props;
  return (
    <View>
      <Text style={{color: '#000'}}>HomeScreen</Text>
      <Button onPress={() => navigation.navigate('Settings')}>
        Got To Setting
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
