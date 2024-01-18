import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {COLORS, FONTS, STYLES} from '~assets/constants/theme';
import DynamicIcon from './DynamicIcon';

const SelectDropdown = props => {
  const {label, onSelected, list, placeholder} = props;
  return (
    <View>
      <Text style={STYLES.formLabel}>{label || ''}</Text>
      <SelectList
        data={list}
        setSelected={val => onSelected(val)}
        save="key"
        placeholder={placeholder || 'Select a value'}
        fontFamily={FONTS.fnm}
        arrowicon={
          <DynamicIcon name="ArrowDown2" color={COLORS.appGray} size="22" />
        }
        search={false}
        boxStyles={styles.selectContainer}
        dropdownStyles={styles.selectDropdown}
        inputStyles={styles.selectInput}
      />
    </View>
  );
};

export default SelectDropdown;

const styles = StyleSheet.create({
  selectContainer: {
    borderColor: '#4D4D4D',
    backgroundColor: '#2A3250',
  },
  selectDropdown: {
    borderColor: '#4D4D4D',
    backgroundColor: COLORS.appPrimary,
  },
  selectInput: {
    color: COLORS.white,
  },
});
