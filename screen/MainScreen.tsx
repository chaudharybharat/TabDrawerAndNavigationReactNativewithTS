import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllScreen from './stack/AllScreen';
import TabScreen from './bottomTab/TabScreen';
import DrawerScreen from './drawer/DrawerScreen';
import StackNav from './bottomTab/StackNav';

function MainScreen(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

export default MainScreen;
