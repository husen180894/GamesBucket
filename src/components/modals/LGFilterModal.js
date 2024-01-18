import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BottomSheet, Divider} from '@rneui/themed';
import {COLORS, FONTS, SIZES, STYLES} from '~assets/constants/theme';
import {Pressable} from 'react-native';
import DynamicIcon from '~components/common/DynamicIcon';

import STATIC_DATA from '~assets/constants/common';
import SelectDropdown from '~components/common/SelectDropdown';
import AppCta from '~components/buttons/AppCta';

const {giveAwayTypes, giveAwaySortby} = STATIC_DATA;

const LGFilterModal = props => {
  const {show, onClose} = props;

  const [selected, setSelected] = useState('');

  return (
    <BottomSheet
      isVisible={show}
      onBackdropPress={onClose}
      backdropStyle={STYLES.bottomSheetBackdrop}
      containerStyle={STYLES.bottomSheetContainer}>
      <View style={styles.container}>
        <View style={[STYLES.flexRowBetween, STYLES.bottomSheetHeader]}>
          <Text style={STYLES.bottomSheetTitle}>Filters</Text>

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
        <View style={styles.formContainer}>
          <SelectDropdown
            label="Giveaway type"
            list={giveAwayTypes}
            placeholder="Select a type"
            onSelected={val => setSelected(val)}
          />

          <SelectDropdown
            label="Giveaway sortby"
            list={giveAwaySortby}
            placeholder="Select a sortby"
            onSelected={val => setSelected(val)}
          />
        </View>
        <View style={[STYLES.flexRowBetween, styles.actionContainer]}>
          <AppCta
            title="Reset"
            size="sm"
            customStyle={[
              {
                backgroundColor: COLORS.appPrimary,
              },
              styles.btnContainer,
            ]}
            titleStyle={{
              color: COLORS.appYellow,
              fontSize: SIZES.slg,
              fontFamily: FONTS.fnm,
            }}
            onAction={() => onAction('clicked')}
          />

          <AppCta
            title="Apply"
            size="sm"
            titleStyle={{
              fontSize: SIZES.slg,
              fontFamily: FONTS.fnm,
              color: COLORS.appPrimary,
            }}
            customStyle={styles.btnContainer}
            onAction={() => onAction('clicked')}
          />
        </View>
      </View>
    </BottomSheet>
  );
};

export default LGFilterModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SIZES.HEIGHT * 0.75,
  },
  formContainer: {
    marginTop: 30,
    flexDirection: 'column',
    gap: 20,
  },
  actionContainer: {
    marginTop: 'auto',
  },
  btnContainer: {
    minWidth: SIZES.WIDTH / 2 - 50,
    paddingVertical: 8,
  },
});
