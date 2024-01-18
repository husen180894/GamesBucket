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

import {showMessage} from 'react-native-flash-message';
import {apiCall} from '~apis';
import {toatsConfig} from '~assets/functions';
import {Divider} from '@rneui/themed';

const LiveScreen = props => {
  const {navigation} = props;
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [statsError, setStatsError] = useState(null);
  const [stats, setStats] = useState(null);
  var [scrollY, setScrollY] = useState(0);
  const [gameData, setGameData] = useState([
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]);

  useEffect(() => {
    fetchTtotlaGiveaway();
  }, []);

  // fetch total giveaway / stats value
  const fetchTtotlaGiveaway = async () => {
    const {hasError, error, rawData} = await apiCall('GET', '/worth');
    if (hasError) {
      showMessage({
        message: 'Stats Error',
        description: error,
        ...toatsConfig('danger'),
      });
      setStatsError(error);
    } else {
      setStats(rawData);
    }
  };

  //function to set value scrollY
  const handleScrollY = event => {
    if (gameData.length > 2) {
      console.log(event);
      setScrollY(event.nativeEvent.contentOffset.y);
    }
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
      {statsError == null && scrollY < 150 && (
        <View style={styles.statsContainer}>
          <StatsCard
            title="Total"
            value={`$ ${stats?.worth_estimation_usd}`}
            icon={IMAGES.awward_icon}
          />
          <StatsCard
            title="Active"
            value={stats?.active_giveaways_number}
            icon={IMAGES.tag_icon}
          />
        </View>
      )}
      {scrollY > 150 && <Divider />}
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
        contentInsetAdjustmentBehavior="automatic"
        onScroll={event => handleScrollY(event)}>
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
    marginBottom: 15,
    width: '100%',
  },
});
