import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import {STYLES} from '~assets/constants';

const HomeScreen = props => {
  const {navigation} = props;
  return (
    <View style={STYLES.container}>
      <Text>HomeScreen</Text>
      <Button onPress={() => navigation.navigate('Settings')}>
        Got To Setting
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
