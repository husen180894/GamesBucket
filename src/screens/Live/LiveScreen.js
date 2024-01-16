import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SIZES, STYLES} from '~assets/constants/theme';
import TopLRHeader from '~components/headers/TopLRHeader';
import IMAGES from '~assets/constants/images';
import StatsCard from '~components/cards/livetab/StatsCard';
import STATIC_DATA from '~assets/constants/common';
import Platformlist from '~components/tabs/Platformlist';
import GACard from '~components/cards/livetab/GACard';

const {awward_icon, tag_icon, dumy_platform} = IMAGES;
// const {gamesPlatforms} = STATIC_DATA;

const LiveScreen = props => {
  const {navigation} = props;

  const [selectedPlatform, setSelectedPlatform] = useState('All');

  const handleChangePlatform = item => {
    setSelectedPlatform(item);

    // write logic to refetch all giveaway for the selected flatform
  };

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
      <View>
        <Platformlist
          categories={STATIC_DATA.gamesPlatforms}
          onAction={val => handleChangePlatform(val)}
          selectedCategory={selectedPlatform}
        />
      </View>

      <ScrollView
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <GACard />
        </View>
      </ScrollView>
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
    gap: SIZES.sxl,
    width: '100%',
  },
});
