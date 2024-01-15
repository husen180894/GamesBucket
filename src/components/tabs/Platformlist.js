import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Platformlist = props => {
  const {} = props;

  const [selectedPlatform, setSelectedPlatform] = useState('All');

  const handleChangePlatform = item => {
    setSelectedPlatform(item);

    // write logic to refetch all giveaway for the selected flatform
  };
  const renderPlatforms = ({item}) => {
    const isSelected = selectedPlatform === item.name;
    return (
      <Chip
        title={item.name}
        onPress={() => handleChangePlatform(item.name)}
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
        data={gamesPlatforms}
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

const styles = StyleSheet.create({});
