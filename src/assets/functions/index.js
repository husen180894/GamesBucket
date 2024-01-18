import {COLORS} from '~assets/constants/theme';

export const toatsConfig = type => {
  if (type === 'danger') {
    return {
      duration: 5000,
      position: 'top',
      type: 'danger',
      icon: 'auto',
      backgroundColor: COLORS.red,
      color: COLORS.white,
      style: {
        marginTop: 30,
        zIndex: 9999,
      },
    };
  } else if (type === 'success') {
    return {
      duration: 3000,
      position: 'top',
      type: 'success',
      icon: 'auto',
      backgroundColor: COLORS.appGreen,
      color: COLORS.white,
      style: {
        marginTop: 30,
        zIndex: 9999,
      },
    };
  }
};
