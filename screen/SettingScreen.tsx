import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from './stack/AllScreen';
import SizeBox from '../utile/SizeBox';

type propsType = NativeStackScreenProps<stackScreens>;

function SettingScreen(props: propsType) {
  const {navigation, route} = props;
  const {info} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting screen</Text>
      <SizeBox height={20} />
      <Text>{info}</Text>
      <SizeBox height={20} />
      <Button title="Back" onPress={() => navigation.pop()} />
    </View>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
