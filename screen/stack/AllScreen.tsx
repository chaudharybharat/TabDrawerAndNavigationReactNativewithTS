import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../homeScreen';
import ProfileScreen from '../ProfileScreen';
import SettingScreen from '../SettingScreen';
import DrawerScreen from '../drawer/DrawerScreen';
export type stackScreens = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingScreen: undefined;
  DrawerScreen: undefined;
};

const Stack = createNativeStackNavigator<stackScreens>();

function AllScreen() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      {/* <Stack.Screen name="DrawerScreen" component={DrawerScreen} /> */}
    </Stack.Navigator>
  );
}

export default AllScreen;
