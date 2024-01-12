import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header} from '@rneui/themed';
import {COLORS, SIZES, STYLES} from '~assets/constants';
import {topHeaderData} from '~assets/constants/common';

const TopLRHeader = props => {
  const {title, type, onAction} = props;
  const rightOptions = topHeaderData.filter(item => item.type === type)[0];
  return (
    <Header
      containerStyle={styles.headerContainer}
      backgroundColor={COLORS.appPrimary}
      leftComponent={{
        text: title || '',
        style: [
          STYLES.headerTitle,
          {
            width: SIZES.WIDTH - SIZES.WIDTH / 4,
          },
        ],
      }}
      rightComponent={
        <View style={styles.headerRight}>
          {rightOptions &&
            rightOptions.options.map(option => {
              return (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => onAction(option.name)}>
                  {option.icon}
                </TouchableOpacity>
              );
            })}
        </View>
      }
    />
  );
};

export default TopLRHeader;

const styles = StyleSheet.create({
  headerContainer: {
    borderBottomWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.appPrimary,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: SIZES.smd,
    paddingVertical: SIZES.smd,
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SIZES.slg,
  },
});
