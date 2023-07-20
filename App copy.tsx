/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { AppService } from './webservice/apiservice';
import React,{useState,useEffect} from 'react';
import { WeatherRoot } from './model/weatherModel'
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//const [value, setValue] = useState("sgkgn");
type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  const [weatherData, setWeatherData] = useState<String>("Loading");
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
     {  <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
   
      <Section title='API DEMO '/>
      </ScrollView>
    </SafeAreaView>
  );


function Section({children, title}: SectionProps): JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <TouchableOpacity onPress={async() =>  {
         var appservice:AppService = new AppService();
       var response= await appservice.getWeatherDetailApi();

       let obj: WeatherRoot = JSON.parse(response);
       var data=JSON.stringify(response)
       console.log("====respose====="); 
       console.log(response); 
       console.log(data); 
         var me=obj.coord.lat
       setWeatherData(me+"");
     
      }}>
  <Text style={{color: 'blue'}}>  
   {"Call Weather API"}
  </Text>
</TouchableOpacity>
<Text style={{color: 'blue'}}>  
   {weatherData}
  </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
