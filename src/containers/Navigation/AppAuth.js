import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginComponent from '../user/login';
import SplashScreen from './SplashScreen';
import SignUpComponent from '../user/signUp';
import { AppNavigation } from './AppNavigator';
import { StyleBuilder } from '../../common/assests';

const AuthStack = createStackNavigator({
  Login: LoginComponent,
  SignUp: SignUpComponent
}, {
    defaultNavigationOptions: {
      ...StyleBuilder('navbar')
    }
  });





export default createAppContainer(createSwitchNavigator(
  {
    Loading: SplashScreen,
    App: AppNavigation,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  }
));
