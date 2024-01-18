import {StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import {COLORS, FONTS, RADIUS, SIZES} from '~assets/constants/theme';

const AppCta = props => {
  const {title, onAction, customStyle} = props;
  return (
    <Button
      buttonStyle={[styles.appCta, customStyle]}
      titleStyle={styles.appCtaTitle}
      size="lg"
      onPress={onAction}
      {...props}>
      {title || ''}
    </Button>
  );
};

export default AppCta;

const styles = StyleSheet.create({
  appCta: {
    backgroundColor: COLORS.appYellow,
    borderRadius: RADIUS.r8xl,
  },
  appCtaTitle: {
    fontFamily: FONTS.fmd,
    fontSize: SIZES.slg,
    color: COLORS.appPrimary,
  },
});
