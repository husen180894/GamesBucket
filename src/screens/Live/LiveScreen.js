import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, STYLES} from '~assets/constants/theme';
import TopLRHeader from '~components/headers/TopLRHeader';
import IMAGES from '~assets/constants/images';
import StatsCard from '~components/cards/livetab/StatsCard';
import STATIC_DATA from '~assets/constants/common';
import {Chip} from '@rneui/themed';
const {awward_icon, tag_icon} = IMAGES;
const {gamesPlatforms} = STATIC_DATA;

const LiveScreen = props => {
  const {navigation} = props;

  return (
    <View style={STYLES.container}>
      <TopLRHeader
        title="Live Giveaway"
        type="live"
        onAction={val => console.log(val)}
      />
      <View style={styles.statsContainer}>
        <StatsCard title="Total" value="Rp. 200" icon={awward_icon} />
        <StatsCard title="Active" value="119" icon={tag_icon} />
      </View>
      <View>{/* render flatlist */}</View>
    </View>
  );
};

export default LiveScreen;

const styles = StyleSheet.create({
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'center',
    gap: SIZES.smd,
    width: '100%',
  },
  contentContainerStyle: {
    backgroundColor: COLORS.appTransparent,
    paddingVertical: SIZES.s7xl,
    paddingHorizontal: 15,
    paddingVertical: SIZES.ssm,
    gap: SIZES.ssm,
  },
  platformChip: {
    minWidth: 50,
    backgroundColor: COLORS.appTransparent,
  },
  platformChipActive: {
    backgroundColor: COLORS.appYellow,
  },
  platformChipTitle: {
    color: COLORS.appLightGreen,
    fontFamily: FONTS.fnm,
    fontSize: SIZES.smd,
    textTransform: 'capitalize',
  },
  platformChipTitleActive: {
    color: COLORS.appPrimary,
    fontFamily: FONTS.fsb,
  },
});
