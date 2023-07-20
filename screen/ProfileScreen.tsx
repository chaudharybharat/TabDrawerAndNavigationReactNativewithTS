import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SizeBox from '../utile/SizeBox';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from './stack/AllScreen';

type propsType = NativeStackScreenProps<stackScreens>;

function ProfileScreen(props: propsType) {
  const {navigation, route} = props;
  const {msg} = route.params;
  return (
    <View style={styles.contianer}>
      <Text style={styles.title}>Profile screen</Text>
      <SizeBox height={20} />
      <Button
        title="Go to setting screen"
        onPress={() =>
          navigation.navigate('SettingScreen', {
            info: 'info pass value to preview screen',
          })
        }
      />
      <SizeBox height={20} />
      <Button
        title="Go to setting screen with replace"
        onPress={() =>
          navigation.replace('SettingScreen', {
            info: 'info pass value to preview screen',
          })
        }
      />
      <SizeBox height={20} />
      <Text>{msg}</Text>
    </View>
  );
}

export default ProfileScreen;

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
