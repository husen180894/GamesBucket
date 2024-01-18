import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SIZES, STYLES} from '~assets/constants/theme';
import TopLRHeader from '~components/headers/TopLRHeader';
import IMAGES from '~assets/constants/images';
import StatsCard from '~components/cards/livetab/StatsCard';
import STATIC_DATA from '~assets/constants/common';
import Platformlist from '~components/tabs/Platformlist';
import GACard from '~components/cards/livetab/GACard';
import LGFilterModal from '~components/modals/LGFilterModal';
import axios from 'axios';

const {awward_icon, tag_icon, dumy_platform} = IMAGES;
// const {gamesPlatforms} = STATIC_DATA;

const LiveScreen = props => {
  const {navigation} = props;
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchTtotlaGiveaway();
  }, []);

  // fetch total giveaway / stats value
  const fetchTtotlaGiveaway = async () => {
    await axios
      .get('https://www.gamerpower.com/api/worth')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log('Hello world i will definitely run');
      });
  };

  const handleChangePlatform = item => {
    setSelectedPlatform(item);

    // write logic to refetch all giveaway for the selected flatform
  };

  //toggle filter modal
  const toggleFilterModal = () => {
    setShowFilters(!showFilters);
  };

  // function to handle header action
  const handleHeaderAction = type => {
    if (type === 'filter') {
      toggleFilterModal();
    }
  };

  return (
    <View style={STYLES.container}>
      <TopLRHeader
        title="Live Giveaway"
        type="live"
        onAction={val => handleHeaderAction(val)}
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
          <GACard />
          <GACard />
          <GACard />
        </View>
      </ScrollView>
      <LGFilterModal show={showFilters} onClose={() => toggleFilterModal()} />
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
