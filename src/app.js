import { Navigation } from 'react-native-navigation';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import registerScreens from './screens';
import CombinedProvider from './CombinedProvider';
import theme from './theme';

export const startSingleScreenApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'Login',
      title: 'Login!',
    },
    appStyle: {
      orientation: 'portrait',
      navBarBackgroundColor: theme.navBar,
      navBarTextColor: 'white',
      navBarButtonColor: 'white',
      tabBarBackgroundColor: theme.tabBarBackgroundColor,
      navBarTitleTextCentered: true,
      statusBarColor: theme.statusBar,
    },
  });
};

export default async () => {

  const store = createStore(rootReducer);
  registerScreens(store, CombinedProvider);
  startSingleScreenApp();
};
