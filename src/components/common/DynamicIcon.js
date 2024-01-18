import React from 'react';
import {
  CloseCircle,
  SearchNormal1,
  Sort,
  Brodcast,
  ArrowDown2,
} from 'iconsax-react-native';

const iconComponents = {
  CloseCircle,
  SearchNormal1,
  Sort,
  Brodcast,
  ArrowDown2,
};
const DynamicIcon = ({size = '20', color = '#ffffff', name, ...props}) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} {...props} />;
};

export default DynamicIcon;
