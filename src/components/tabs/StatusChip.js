import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Chip} from '@rneui/themed';
import {COLORS, FONTS, SIZES, STYLES} from '~assets/constants/theme';

const StatusChip = props => {
  const {title} = props;
  return (
    <Chip buttonStyle={styles.container}>
      <View style={[STYLES.flexRowCenter, {gap: 4}]}>
        <View style={styles.indicator} />
        <Text style={styles.title}>{title || ''}</Text>
      </View>
    </Chip>
  );
};

export default StatusChip;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000066',
    paddingVertical: 5,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.appYellow,
  },
  title: {
    fontFamily: FONTS.fnm,
    fontSize: SIZES.smd,
    color: COLORS.appYellow,
  },
});
