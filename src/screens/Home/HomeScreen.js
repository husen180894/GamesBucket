import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import {SIZES, STYLES, COLORS, RADIUS} from '~assets/constants';
import TopLRHeader from '~components/headers/TopLRHeader';

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
        <View style={styles.statsCard}>
          <View>
            <Text>Icon</Text>
          </View>
          <View>
            <Text>Total</Text>
            <Text>$482.97</Text>
          </View>
        </View>
        <View style={styles.statsCard}>
          <View>
            <Text>Icon</Text>
          </View>
          <View>
            <Text>Active</Text>
            <Text>117</Text>
          </View>
        </View>
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
    gap: SIZES.s3xl,
    width: '100%',
  },
  statsCard: {
    paddingVertical: SIZES.smd,
    paddingHorizontal: SIZES.slg,
    backgroundColor: COLORS.appSecondary,
    borderRadius: RADIUS.rlg,
    width: SIZES.WIDTH / 2 - 40,
  },
});
