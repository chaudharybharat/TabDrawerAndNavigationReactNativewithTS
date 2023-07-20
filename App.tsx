/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import PropsFun from './screen/PropsFun';
import FunEventProps from './screen/FunEventProps';
import ImageEx from './screen/ImageEx';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  useColorScheme,Text,
  View, TouchableOpacity, Alert, TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [textTitle, changeTitleText] = useState<string>('');
  const [textMessage, changeMessageText] = useState<string>('');
  const isDarkMode = useColorScheme() === 'dark';

  const handleClick = () => {
    if (textTitle.trim != "" && textMessage.trim != "") {
      Alert.alert(textTitle, textMessage);
    }
  };

  const addFun = (num1: number, num2: number): string => {
    let sum = num1 + num2;
    return 'Return sum' + sum;
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.contianer}>
          <TextInput
            onChangeText={changeTitleText}
            value={textTitle}
            placeholder="Please enter title"
          />
          <TextInput
            onChangeText={changeMessageText}
            value={textMessage}
            placeholder="Please enter messsage"
          />
          <Button title="CLICK" onPress={handleClick} />
          <PropsFun msg="This is props funcation">
            <Text>Pass children Element</Text>
          </PropsFun>
          <FunEventProps handleClick={handleClick} add={addFun}/>
         {/*  <ImageEx/> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    margin: 15,
  },
});

export default App;
