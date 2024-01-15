import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, RADIUS, SIZES} from '~assets/constants/theme';

const StatsCard = props => {
  const {icon, title, value} = props;
  return (
    <View style={styles.statsCard}>
      <View style={styles.statsIconContainer}>
        <View style={styles.statsIconWrapper}>
          <Image source={icon} alt={title} style={styles.statsIcon} />
        </View>
      </View>
      <View>
        <Text style={styles.statsTitle}>{title || ''}</Text>
        <Text style={styles.statsValue}>{value || ''}</Text>
      </View>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
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
    padding: 4,
    justifyContent: 'center',
  },
  statsIconWrapper: {
    backgroundColor: COLORS.black,
    width: '100%',
    height: '100%',
    borderRadius: RADIUS.r7xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsIcon: {
    width: SIZES.sxxl,
    height: SIZES.sxxl,
    resizeMode: 'contain',
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
