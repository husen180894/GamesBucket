import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  white: '#ffffff',
  black: '#000000',
  gray: '#7c7c7c',
  red: '#FF0000',
  green: '#00FF00',
  appPrimary: '#020321',
  appSecondary: '#202630',
  appYellow: '#DFFE00',
  appGreen: '#6b6b6b',
  appLightGreen: '#ACACAC',
  appGray: '#8593a3',
  appTransparent: '#ffffff00',
};

export const SIZES = {
  WIDTH: width,
  HEIGHT: height,
  sxs: 10,
  ssm: 12,
  smd: 14,
  snm: 16,
  slg: 18,
  sxl: 20,
  sxxl: 22,
  s3xl: 26,
  s4xl: 30,
  s5xl: 34,
  s6xl: 38,
  s7xl: 42,
  s8xl: 46,
};

export const RADIUS = {
  rxs: 2,
  rsm: 4,
  rmd: 6,
  rnm: 8,
  rlg: 10,
  rxl: 12,
  rxxl: 14,
  r3xl: 16,
  r4xl: 18,
  r5xl: 20,
  r6xl: 22,
  r7xl: 26,
  r8xl: 50,
};

export const FONTS = {
  fnm: 'Mulish-Regular',
  fb: 'Mulish-Bold',
  fsb: 'Mulish-SemiBold',
  feb: 'Mulish-ExtraBold',
  fmd: 'Mulish-Medium',
  fl: 'Mulish-Light',
  fel: 'Mulish-ExtraLight',
  fbb: 'Mulish-Black',
};

export const STYLES = {
  // Layout styles
  container: {
    flex: 1,
    backgroundColor: COLORS.appPrimary,
  },

  // Button styles

  // Typography styles
  headerTitle: {
    fontSize: SIZES.sxxl,
    fontFamily: FONTS.fnm,
    color: COLORS.white,
  },

  // grid/flex styles
  flexRowStart: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  flexColStart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  flexColBetween: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  flexRowBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  marginVerticalSm: {
    marginVertical: 14,
  },
};

const appTheme = {
  COLORS,
  SIZES,
  RADIUS,
  FONTS,
  STYLES,
};

export default appTheme;
