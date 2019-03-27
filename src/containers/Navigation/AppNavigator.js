import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreenComponent from '../HomeScreen';
import { StyleBuilder, AppColor ,Color} from '../../common/assests';

export const AppNavigation = createStackNavigator({
    home : HomeScreenComponent
},{
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor: '#CD5C5C',
        }
    }
   
}
)