import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '~assets/constants/theme';
import LottieView from 'lottie-react-native';

const CustomAnimation = props => {
  const {title, message, style, animFile, isLoop = true} = props;
  return (
    <View>
      <LottieView
        source={animFile}
        autoPlay
        loop={isLoop}
        style={{width: '100%', alignSelf: 'center', ...style}}
      />
      <View style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </View>
  );
};

export default CustomAnimation;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'column',
    gap: 10,
    marginTop: 20,
  },
  title: {
    fontFamily: FONTS.fnm,
    fontSize: SIZES.sxxl,
    color: COLORS.white,
    textAlign: 'center',
  },
  message: {
    fontFamily: FONTS.fnm,
    fontSize: SIZES.smd,
    color: COLORS.appGray,
    textAlign: 'center',
  },
});
