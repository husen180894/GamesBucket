import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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
import {Button, Divider} from '@rneui/themed';
import endpoints from '~apis/endpoints';
import {FlashList} from '@shopify/flash-list';
import VirtualizedScrollView from '~components/common/ScrollList';

const LiveScreen = props => {
  const {navigation} = props;
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [statsError, setStatsError] = useState(null);
  const [stats, setStats] = useState(null);
  var [scrollY, setScrollY] = useState(0);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetchTtotlaGiveaway();
    fetchGiveawaysList();
  }, []);

  // fetch total giveaway / stats value
  const fetchTtotlaGiveaway = async () => {
    const {hasError, error, rawData} = await apiCall(
      'GET',
      endpoints.total_giveaway,
    );
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

  // fetch total giveaway / stats value
  const fetchGiveawaysList = async () => {
    const {hasError, error, rawData} = await apiCall(
      'GET',
      endpoints.giveaway_list,
    );
    if (hasError) {
      showMessage({
        message: 'Stats Error',
        description: error,
        ...toatsConfig('danger'),
      });
      setGameData([]);
    } else {
      setGameData(rawData);
    }
  };

  //function to set value scrollY
  const handleScrollY = event => {
    if (gameData.length > 2) {
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

  // render game data
  const renderGameData = ({item}) => {
    return <GACard data={item} />;
  };
  // const renderGameData = useCallback(({item}) => {
  //   <GACard data={item} />;
  // }, []);

  //list footer component
  const ListFooter = () => {
    return (
      <View style={{marginVertical: 20}}>
        <Button>Load more</Button>
      </View>
    );
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

      <FlatList
        data={gameData.slice(0, 5)}
        renderItem={renderGameData}
        contentContainerStyle={{paddingBottom: 100}}
        maxToRenderPerBatch={4}
        initialNumToRender={4}
        removeClippedSubviews={true}
        getItemLayout={(data, index) => ({
          length: 400,
          offset: 400 * index,
          index,
        })}
        keyExtractor={item => item.id.toString()}
        onScroll={event => handleScrollY(event)}
        ListFooterComponent={ListFooter}
      />
      {/* <FlashList
        data={gameData}
        renderItem={renderGameData}
        keyExtractor={item => item.id.toString()}
        estimatedItemSize={150}
        disableHorizontalListHeightMeasurement={true}
        onScroll={event => handleScrollY(event)}
      /> */}

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
