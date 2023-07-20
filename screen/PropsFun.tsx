import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";

/* you can also def props with children below also that time no need to inside obj def children*/
/* type propsType = PropsWithChildren<{
  msg: string;
}>; */
type propsType = {
  msg: string;
  children:JSX.Element;
};

const PropsFun = (props: propsType) => {
  return (
    <View style={styles.contianer}>
      <Text>{props.msg}</Text>
      {props.children}
    </View>
  );
};

export default PropsFun;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    margin: 15,
  },
});
