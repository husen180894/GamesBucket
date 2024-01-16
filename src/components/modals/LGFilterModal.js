import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BottomSheet} from '@rneui/themed';
import {COLORS, SIZES} from '~assets/constants/theme';

const LGFilterModal = props => {
  const {show, onClose} = props;
  return (
    <BottomSheet
      isVisible={show}
      onBackdropPress={onClose}
      backdropStyle={styles.bottomSheetBackdrop}
      containerStyle={styles.bottomSheetContainer}>
      <View>
        <Text>modal</Text>
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
    maxHeight: SIZES.HEIGHT * 0.7,
  },
});
