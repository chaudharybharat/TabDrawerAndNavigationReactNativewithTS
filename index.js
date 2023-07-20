/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import MainScreen from './screen/MainScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
