import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import {SIZES, STYLES, COLORS, RADIUS, FONTS} from '~assets/constants';
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
          <View style={styles.statsIconContainer}>
            <Text>Icon</Text>
          </View>
          <View>
            <Text style={styles.statsTitle}>Total</Text>
            <Text style={styles.statsValue}>$482.97</Text>
          </View>
        </View>
        <View style={styles.statsCard}>
          <View style={styles.statsIconContainer}>
            <Text>Icon</Text>
          </View>
          <View>
            <Text style={styles.statsTitle}>Active</Text>
            <Text style={styles.statsValue}>117</Text>
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
    gap: SIZES.smd,
    width: '100%',
  },
  statsCard: {
    paddingVertical: SIZES.smd,
    paddingHorizontal: SIZES.smd,
    backgroundColor: COLORS.appSecondary,
    borderRadius: RADIUS.r3xl,
    width: SIZES.WIDTH / 2 - 25,
    borderWidth: 1,
    flexDirection: 'row',
    gap: SIZES.sxs,
    borderColor: COLORS.appSecondary,
  },
  statsIconContainer: {
    width: 45,
    height: 45,
    backgroundColor: COLORS.appTransparent,
    borderRadius: RADIUS.r8xl,
    borderWidth: 2,
    borderColor: COLORS.appYellow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsTitle: {
    fontFamily: FONTS.fnm,
    fontSize: SIZES.slg,
    color: COLORS.appGray,
  },
  statsValue: {
    fontFamily: FONTS.feb,
    fontSize: SIZES.sxxl,
    color: COLORS.white,
    marginTop: 2,
  },
});
