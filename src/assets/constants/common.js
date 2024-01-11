import {Brodcast, DiscountCircle, Game, Setting} from 'iconsax-react-native';
import HomeScreen from '~screens/Home/HomeScreen';
import {COLORS, SIZES} from './theme';

const bottomTabList = [
  {
    id: 'bottomTabsList01',
    name: 'Live',
    component: HomeScreen,
    icon: (
      <Brodcast size={SIZES.s3xl} variant="Linear" color={COLORS.appGray} />
    ),
    active: (
      <Brodcast size={SIZES.s3xl} variant="Bold" color={COLORS.appYellow} />
    ),
  },
  {
    id: 'bottomTabsList02',
    name: 'Games',
    component: HomeScreen,
    icon: <Game size={SIZES.s3xl} variant="Linear" color={COLORS.appGray} />,
    active: <Game size={SIZES.s3xl} variant="Bold" color={COLORS.appYellow} />,
  },
  {
    id: 'bottomTabsList03',
    name: 'Offers',
    component: HomeScreen,
    icon: (
      <DiscountCircle
        size={SIZES.s3xl}
        variant="Linear"
        color={COLORS.appGray}
      />
    ),
    active: (
      <DiscountCircle
        size={SIZES.s3xl}
        variant="Bold"
        color={COLORS.appYellow}
      />
    ),
  },
  {
    id: 'bottomTabsList04',
    name: 'Settings',
    component: HomeScreen,
    icon: <Setting size={SIZES.s3xl} variant="Linear" color={COLORS.appGray} />,
    active: (
      <Setting size={SIZES.s3xl} variant="Bold" color={COLORS.appYellow} />
    ),
  },
];

const STATIC_DATA = {
  bottomTabList,
};

export default STATIC_DATA;
