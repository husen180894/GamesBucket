import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card, Chip, Image} from '@rneui/themed';
import IMAGES from '~assets/constants/images';
import {COLORS, FONTS, RADIUS, SIZES, STYLES} from '~assets/constants/theme';
import StatusChip from '~components/tabs/StatusChip';
import AppCta from '~components/buttons/AppCta';
import {Profile2User} from 'iconsax-react-native';

const GACard = props => {
  const {data, onAction} = props;
  return (
    <Card containerStyle={styles.giveAwayCard}>
      <ImageBackground
        source={IMAGES.dumy_pic}
        style={styles.giveAwayCardImage}
        resizeMode="cover">
        <View style={[STYLES.flexColBetween, {height: 200, padding: 15}]}>
          <View style={STYLES.flexRowBetween}>
            <StatusChip title="Active" />
            <Text>
              <Image
                source={IMAGES.dumy_platform}
                style={styles.giveAwayCardPlatform}
              />
            </Text>
          </View>
          <View style={[STYLES.flexRowStart, {gap: 3}]}>
            <Profile2User size="18" variant="Bold" color="#fff" />
            <Text style={styles.giveAwayCardStats}>
              14370+ users collected this loot
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.giveAwayCardContent}>
        <View style={[STYLES.flexRowStart, {gap: 6}]}>
          <Chip
            title="PC Game"
            buttonStyle={styles.giveAwayCardChip}
            titleStyle={styles.giveAwayCardChipTitle}
          />
          <Chip
            title="FREE"
            buttonStyle={styles.giveAwayCardChip}
            titleStyle={styles.giveAwayCardChipTitle}
          />
        </View>
        <View style={[STYLES.marginVerticalSm, STYLES.flexColStart, {gap: 10}]}>
          <Text style={styles.giveAwayCardTitle} numberOfLines={1}>
            FIFA 22 (Epic Games) Giveaway
          </Text>
          <Text style={styles.giveAwayCardTime}>
            Live Now - Jun 08 at 08:30 PM
          </Text>
        </View>
        <View style={{marginTop: 14}}>
          <AppCta title="View Game" onAction={() => onAction('cicked')} />
        </View>
      </View>
    </Card>
  );
};

export default GACard;

const styles = StyleSheet.create({
  giveAwayCard: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#333c5f',
    backgroundColor: COLORS.appSecondary,
    borderRadius: RADIUS.r3xl,
  },
  giveAwayCardImage: {
    width: SIZES.WIDTH - 42,
    height: 200,
    borderRadius: RADIUS.rxxl,
    overflow: 'hidden',
  },
  giveAwayCardContent: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  giveAwayCardChip: {
    backgroundColor: COLORS.appGreen,
    minWidth: 50,
  },
  giveAwayCardChipTitle: {
    fontFamily: FONTS.fnm,
    fontSize: SIZES.smd,
    color: COLORS.white,
  },
  giveAwayCardTitle: {
    fontFamily: FONTS.fsb,
    fontSize: SIZES.slg,
  },
  giveAwayCardTime: {
    fontFamily: FONTS.fnm,
    fontSize: SIZES.smd,
    color: COLORS.appLightGreen,
  },

  giveAwayCardStats: {
    fontSize: SIZES.smd,
    fontFamily: FONTS.fnm,
    color: COLORS.white,
  },
  giveAwayCardPlatform: {
    width: 30,
    height: 30,
    borderRadius: RADIUS.rmd,
  },
});
