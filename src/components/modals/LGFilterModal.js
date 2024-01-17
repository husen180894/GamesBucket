import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomSheet, Divider} from '@rneui/themed';
import {COLORS, FONTS, RADIUS, SIZES, STYLES} from '~assets/constants/theme';
import {Pressable} from 'react-native';
import DynamicIcon from '~components/common/DynamicIcon';

const LGFilterModal = props => {
  const {show, onClose} = props;
  return (
    <BottomSheet
      isVisible={show}
      onBackdropPress={onClose}
      backdropStyle={styles.bottomSheetBackdrop}
      containerStyle={styles.bottomSheetContainer}>
      <View style={styles.container}>
        <View style={[STYLES.flexRowBetween, styles.bottomSheetHeader]}>
          <Text style={styles.bottomSheetTitle}>Filters</Text>

          <Pressable
            onPress={onClose}
            android_ripple={{
              color: COLORS.appGray,
              borderless: true,
            }}
            hitSlop={50}>
            <DynamicIcon name="CloseCircle" color="#c2c2c2" size={22} />
          </Pressable>
        </View>
        <Divider />
      </View>
    </BottomSheet>
  );
};

export default LGFilterModal;

const styles = StyleSheet.create({
  bottomSheetBackdrop: {
    backgroundColor: COLORS.black,
    opacity: 0.4,
    marginTop: 'auto',
  },
  bottomSheetContainer: {
    backgroundColor: COLORS.appSecondary,
    maxHeight: SIZES.HEIGHT * 0.8,
    marginTop: 'auto',
    borderRadius: RADIUS.r3xl,
    marginHorizontal: 10,
    alignItems: 'flex-start',
    padding: 20,
  },
  container: {
    width: '100%',
  },
  bottomSheetHeader: {
    paddingBottom: 20,
    width: '100%',
  },
  bottomSheetTitle: {
    fontFamily: FONTS.fnm,
    fontSize: SIZES.slg,
  },
});
