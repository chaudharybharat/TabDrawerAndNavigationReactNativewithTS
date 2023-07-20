import { StyleSheet,Text,View,Image } from "react-native";
import React  from "react";
import img from '../assets/img.jpg'

const ImageEx = () => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.image} />
      <Image source={require('../assets/img.jpg')} style={styles.image} />
      <Image
        source={{uri: 'https://picsum.photos/200/300'}}
        style={styles.image}
      />
    </View>
  );
};

export default ImageEx;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
