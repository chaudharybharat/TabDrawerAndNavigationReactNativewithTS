import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistrationScreen from '../RegistrationScreen';
import DrawerScreen from '../drawer/DrawerScreen';
type stackType = {
  RegistrationScreen: undefined;
  DrawerScreen: undefined;
};

const Stack = createNativeStackNavigator<stackType>();
const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <Stack.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
