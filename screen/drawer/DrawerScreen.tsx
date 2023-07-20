import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import OneScreen from '../bottomTab/OneScreen';
import TwoScreen from '../bottomTab/TwoScreen';
import ThreeScreen from '../bottomTab/ThreeScreen';
import TabScreen from '../bottomTab/TabScreen';
import {Text, View, Image} from 'react-native';
import img from '../../assets/img.jpg';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
type drawerScreenType = {
  OneScreen: undefined;
  TwoScreen: undefined;
  ThreeScreen: undefined;
  TabScreen: undefined;
};
const Drawer = createDrawerNavigator<drawerScreenType>();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="TabScreen"
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawer {...props} />
      )}>
      <Drawer.Screen
        name="OneScreen"
        component={OneScreen}
        options={{drawerLabel: 'One Screen'}}
      />
      <Drawer.Screen
        name="TwoScreen"
        component={TwoScreen}
        options={{drawerLabel: 'Two Screen'}}
      />
      <Drawer.Screen
        name="ThreeScreen"
        component={ThreeScreen}
        options={{drawerLabel: 'Three Screen'}}
      />
      <Drawer.Screen name="TabScreen" component={TabScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{flexDirection:'row',margin:10}}>
          <View style={{padding:10}}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>Bharat chaudhary</Text>
            <Text>test@gmail.com</Text>
          </View>
          <Image
            source={img}
            style={{height: 60, width: 60, borderRadius: 30}}
          />
        </View>
        <DrawerItemList {...props}></DrawerItemList>
      </DrawerContentScrollView>
      <Text
        style={{
          padding: 10,
          marginBottom: 5,
          color: 'red',
          fontWeight: 'bold',
        }}>
        @Copyright:Bharat chaudhary{' '}
      </Text>
    </View>
  );
};
export default DrawerScreen;
