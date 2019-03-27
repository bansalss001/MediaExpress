import * as React from 'react';
import { StatusBar, View } from 'react-native';
import AppAuth from './containers/Navigation/AppAuth';
import { StyleBuilder } from './common/assests'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={StyleBuilder('container')}>
        <StatusBar barStyle='default' />
        <AppAuth></AppAuth>
      </View>
    )
  }
}
