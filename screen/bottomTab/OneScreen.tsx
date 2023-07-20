import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SizeBox from '../../utile/SizeBox';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {stackScreens} from '../stack/AllScreen';

type propsType = NativeStackScreenProps<stackScreens>;

function OneScreen(props: propsType) {
  const {navigation} = props;

  return (
    <View style={styles.contianer}>
      <Text style={styles.title}>Screen One</Text>
      <SizeBox height={20} />
      <Button
        title="Go to Setting"
        onPress={() =>
          navigation.navigate('SettingScreen', {
            info: 'info pass value to preview screen',
          })
        }
      />
    </View>
  );
}

export default OneScreen;

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
