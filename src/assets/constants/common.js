import {Brodcast, DiscountCircle, Game, Setting} from 'iconsax-react-native';
import {COLORS, SIZES} from './theme';
import LiveScreen from '~screens/Live/LiveScreen';
import GameScreen from '~screens/Games/GameScreen';
import OfferScreen from '~screens/Offers/OfferScreen';
import SettingScreen from '~screens/Settings/SettingScreen';
import DynamicIcon from '~components/common/DynamicIcon';

const bottomTabList = [
  {
    id: 'bottomTabsList01',
    name: 'Live',
    component: LiveScreen,
    icon: (
      <DynamicIcon
        name="Brodcast"
        size={SIZES.s3xl}
        variant="Linear"
        color={COLORS.appGray}
      />
    ),
    active: (
      <DynamicIcon
        name="Brodcast"
        size={SIZES.s3xl}
        variant="Bold"
        color={COLORS.appYellow}
      />
    ),
  },
  {
    id: 'bottomTabsList02',
    name: 'Games',
    component: GameScreen,
    icon: <Game size={SIZES.s3xl} variant="Linear" color={COLORS.appGray} />,
    active: <Game size={SIZES.s3xl} variant="Bold" color={COLORS.appYellow} />,
  },
  {
    id: 'bottomTabsList03',
    name: 'Offers',
    component: OfferScreen,
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
    component: SettingScreen,
    icon: <Setting size={SIZES.s3xl} variant="Linear" color={COLORS.appGray} />,
    active: (
      <Setting size={SIZES.s3xl} variant="Bold" color={COLORS.appYellow} />
    ),
  },
];

export const topHeaderData = [
  {
    id: 'topTabsList01',
    type: 'live',
    options: [
      {
        id: 'topTabOptions01',
        icon: 'SearchNormal1',
        name: 'search',
      },
      {
        id: 'topTabOptions02',
        icon: 'Sort',
        name: 'filter',
      },
    ],
  },
  {
    id: 'topTabsList02',
    type: 'explore',
    options: [
      {
        id: 'topTabOptions21',
        icon: 'SearchNormal',
        name: 'search',
      },
      {
        id: 'topTabOptions22',
        icon: 'Sort',
        name: 'filter',
      },
    ],
  },
];

const gamesPlatforms = [
  {
    id: 'gp01',
    name: 'All',
  },
  {
    id: 'gp02',
    name: 'PlayStation',
  },
  {
    id: 'gp03',
    name: 'Xbox',
  },
  {
    id: 'gp04',
    name: 'Nintendo Switch',
  },
  {
    id: 'gp05',
    name: 'PC',
  },
  {
    id: 'gp06',
    name: 'Mobile',
  },
  {
    id: 'gp07',
    name: 'PlayStation 2',
  },
  {
    id: 'gp08',
    name: 'Xbox 360',
  },
  {
    id: 'gp09',
    name: 'PlayStation 5',
  },
  {
    id: 'gp10',
    name: 'Xbox Series X',
  },
  {
    id: 'gp11',
    name: 'PlayStation 6',
  },
  {
    id: 'gp12',
    name: 'Mybox Series X',
  },
];

const giveAwayTypes = [
  {
    key: 'game',
    value: 'Game',
  },
  {
    key: 'loot',
    value: 'Loot',
  },
  {
    key: 'beta',
    value: 'Beta',
  },
  {
    key: 'none',
    value: 'None',
  },
];
const giveAwaySortby = [
  {
    key: 'popularity',
    value: 'Popularity',
  },
  {
    key: 'value',
    value: 'Value',
  },
  {
    key: 'date',
    value: 'Date',
  },
  {
    key: 'none',
    value: 'None',
  },
];

const STATIC_DATA = {
  bottomTabList,
  topHeaderData,
  gamesPlatforms,
  giveAwayTypes,
  giveAwaySortby,
};

export default STATIC_DATA;
