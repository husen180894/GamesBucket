import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, RADIUS, SIZES, STYLES} from '~assets/constants/theme';
import TopLRHeader from '~components/headers/TopLRHeader';
import IMAGES from '~assets/constants/images';
import StatsCard from '~components/cards/livetab/StatsCard';
import STATIC_DATA from '~assets/constants/common';
import Platformlist from '~components/tabs/Platformlist';
import {Card} from '@rneui/themed';
const {awward_icon, tag_icon} = IMAGES;
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
      <View>
        <Card containerStyle={styles.giveAwayCard}>
          <ImageBackground
            source={IMAGES.dumy_pic}
            style={styles.giveAwayCardImage}
            resizeMode="cover"
          />
        </Card>
      </View>
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
  giveAwayCard: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#333cf5',
    backgroundColor: COLORS.appSecondary,
    borderRadius: RADIUS.r3xl,
  },
  giveAwayCardImage: {
    width: SIZES.WIDTH - 30,
    height: 200,
    borderRadius: RADIUS.r3xl,
    overflow: 'hidden',
  },
});
