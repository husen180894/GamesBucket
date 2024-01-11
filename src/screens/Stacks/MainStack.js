import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Platform} from 'react-native';

import {STATIC_DATA, COLORS, SIZES} from '~assets/constants';

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
        tabBarStyle: {
          backgroundColor: COLORS.appPrimary,
          paddingBottom: 5,
          height:
            Platform.OS === 'android'
              ? SIZES.HEIGHT * 0.09
              : SIZES.HEIGHT * 0.1,
        },
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
