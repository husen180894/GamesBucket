import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from '@rneui/themed';
import {COLORS, SIZES, STYLES} from '~assets/constants/theme';
import {topHeaderData} from '~assets/constants/common';
import DynamicIcon from '~components/common/DynamicIcon';

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
                <Pressable
                  android_ripple={{
                    color: COLORS.appGray,
                    borderless: true,
                  }}
                  hitSlop={50}
                  key={option.id}
                  onPress={() => onAction(option.name)}>
                  <DynamicIcon
                    name={option.icon}
                    size={SIZES.sxxl}
                    color={COLORS.white}
                  />
                </Pressable>
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
