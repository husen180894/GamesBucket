import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Chip} from '@rneui/themed';
import {COLORS, FONTS, SIZES} from '~assets/constants/theme';
import {FlatList} from 'react-native';

const Platformlist = props => {
  const {categories, onAction, selectedCategory} = props;

  const renderPlatforms = ({item}) => {
    const isSelected = selectedCategory === item.name;
    return (
      <Chip
        title={item.name}
        onPress={() => onAction(item.name)}
        buttonStyle={[
          styles.platformChip,
          isSelected && styles.platformChipActive,
        ]}
        titleStyle={[
          styles.platformChip,
          isSelected && styles.platformChipTitleActive,
        ]}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderPlatforms}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Platformlist;

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: COLORS.appTransparent,
    paddingVertical: 15,
    paddingHorizontal: 15,
    gap: 5,
  },
  platformChip: {
    minWidth: 50,
    backgroundColor: COLORS.appTransparent,
  },
  platformChipActive: {
    backgroundColor: COLORS.appYellow,
  },
  platformChipTitle: {
    color: COLORS.appLightGreen,
    fontFamily: FONTS.fnm,
    fontSize: SIZES.smd,
    textTransform: 'capitalize',
  },
  platformChipTitleActive: {
    color: COLORS.appPrimary,
    fontFamily: FONTS.fsb,
  },
});
