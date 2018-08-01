import { Navigation } from 'react-native-navigation';

import Login from './screens/Login';
import Main from './screens/Main';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('Login', () => Login, store, Provider);
  Navigation.registerComponent('Main', () => Main, store, Provider);
};

export default registerScreens;
