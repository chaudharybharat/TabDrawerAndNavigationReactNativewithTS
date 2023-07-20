import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SizeBox from '../utile/SizeBox';
import {useNavigation} from '@react-navigation/native';

function RegistrationScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.contianer}>
      <Text style={styles.title}>Registration screen</Text>
      <SizeBox height={20} />
      <Button
        title="Go to Home screen"
        onPress={() => navigation.navigate('DrawerScreen')}
      />
    </View>
  );
}

export default RegistrationScreen;

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
