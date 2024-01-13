import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES, STYLES, IMAGES} from '~assets/constants';
import TopLRHeader from '~components/headers/TopLRHeader';
import StatsCard from '~components/cards/livetab/StatsCard';
const {awward_icon, tag_icon} = IMAGES;

const HomeScreen = props => {
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'center',
    gap: SIZES.smd,
    width: '100%',
  },
});
