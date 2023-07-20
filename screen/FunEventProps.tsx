import { Button, StyleSheet, Text,View,Alert } from "react-native";
import React, {useState} from 'react';
import SizeBox from "../utile/SizeBox";

type propsType = {
  handleClick: () => void;
  add: (num1: number, num2: number) => string;
};


const FunEventProps: React.FC<propsType> = props => {
    const [result, setResult] = useState<string>('');
  return (
    <View>
      <Button title="Click" onPress={() => props.handleClick()} />
      <SizeBox height={10} />
      <Button title="Sum" onPress={() => setResult(props.add(20, 30))} />
      <SizeBox height={10} />
      <Text>{result}</Text>
    </View>
  );
};

export default FunEventProps;
