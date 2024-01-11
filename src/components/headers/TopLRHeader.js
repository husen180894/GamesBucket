import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Header} from '@rneui/themed';
import {COLORS, SIZES, STYLES} from '~assets/constants';
import {SearchNormal, Sort} from 'iconsax-react-native';

const TopLRHeader = props => {
  const {title} = props;
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
          <TouchableOpacity onPress={() => {}}>
            <SearchNormal size={22} color={COLORS.white} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 10}} onPress={() => {}}>
            <Sort size={22} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      }
    />
  );
};

export default TopLRHeader;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.appPrimary,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
