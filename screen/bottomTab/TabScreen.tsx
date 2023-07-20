import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OneScreen from './OneScreen';
import TwoScreen from './TwoScreen';
import ThreeScreen from './ThreeScreen';
import SettingScreen from '../SettingScreen';
import AllScreen from '../stack/AllScreen';
// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';

type screenType = {
  AllScreen: undefined;
  OneScreen: undefined;
  TwoScreen: undefined;
  ThreeScreen: undefined;
  SettingScreen: undefined;
};

const Tab = createBottomTabNavigator<screenType>();
const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="AllScreen"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: 'red',
        tabBarInactiveBackgroundColor: 'blue',
        headerShown: false,
        tabBarStyle: {height: 65},
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          padding: 5,
        },
        tabBarIcon: ({color, size}) => (
          <Icon name="rocket" size={size} color={color}></Icon>
        ),
      }}>
      <Tab.Screen
        name="AllScreen"
        component={AllScreen}
        options={{
          tabBarLabel: 'One',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="TwoScreen"
        component={TwoScreen}
        options={{
          tabBarLabel: 'Second',
          /*  below line to remove tabbar in second screen
         tabBarStyle: {display: 'none'}, */
          tabBarIcon: ({color, size}) => (
            <Icon name="rocket" size={size} color={color}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="ThreeScreen"
        component={ThreeScreen}
        options={{
          tabBarLabel: 'Three',
          tabBarIcon: ({color, size}) => (
            <Icon name="facebook" size={size} color={color}></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
