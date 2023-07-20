import * as React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SizeBox from '../utile/SizeBox';
import { stackScreens } from './stack/AllScreen';

type propsType = NativeStackScreenProps<stackScreens, "HomeScreen">


function HomeScreen(props: propsType) {
  const {navigation} = props;
  return (
    <View style={styles.contianer}>
      <Text>Home Screen</Text>
      <SizeBox height={20} />
      <Button
        title="Go to Profile screen"
        onPress={() => {
          navigation.navigate('ProfileScreen', {msg: 'this message pass in agrument'});
        }}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
