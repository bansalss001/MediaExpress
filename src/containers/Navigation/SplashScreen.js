import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import LoadingComponent from '../../common/components/LoadingComponent';
export default class SplashScreen extends Component {
    isLoaded = false;
    constructor(props){
        super(props);
        this._bootstrapAsync();
    }
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.isLoaded = true;
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
      };

    render(){
        return (
            <LoadingComponent isLoaded={this.isLoaded}/>
        );
    }
}
