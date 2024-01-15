import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Platform} from 'react-native';
import STATIC_DATA from '~assets/constants/common';
import {COLORS, FONTS, SIZES} from '~assets/constants/theme';

const Tab = createBottomTabNavigator();

const {bottomTabList} = STATIC_DATA;

function MainStack() {
  return (
    <Tab.Navigator
      initialRouteName="Live"
      screenOptions={{
        tabBarActiveTintColor: COLORS.appYellow,
        tabBarInactiveTintColor: COLORS.appGray,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarIconStyle: {marginBottom: -5},
        tabBarStyle: {
          backgroundColor: COLORS.appSecondary,
          borderTopWidth: 0,
          paddingBottom: 15,
          height:
            Platform.OS === 'android'
              ? SIZES.HEIGHT * 0.09
              : SIZES.HEIGHT * 0.1,
          shadowColor: COLORS.appPrimary,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        },
        tabBarLabelStyle: {
          fontSize: SIZES.smd,
          fontFamily: FONTS.fnm,
        },
        tabBarHideOnKeyboard: true,
      }}>
      {bottomTabList.map(tab => {
        return (
          <Tab.Screen
            key={tab.id}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarIcon: ({focused}) => {
                return <>{focused ? tab.active : tab.icon}</>;
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

export default MainStack;
