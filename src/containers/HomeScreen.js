import React from 'react';
import { View, Text } from 'react-native';


export default class HomeScreenComponent extends React.Component {
     constructor(props){
         super(props);
     }

     render(){
      return(   <View>
             <Text> Home Screen</Text>
         </View>)
     }
}
