import React from 'react';
import { View , TouchableHighlight ,Text} from 'react-native';
import { StyleBuilder } from '../../../assests';
import IconComponent from './icon';

export default class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let buttonData = this.props.buttonData;
        return (
            <TouchableHighlight onPress={!buttonData.readOnly && buttonData.onPress}>
            <View style={StyleBuilder('button '+buttonData.buttonClass)}>
                {buttonData.icon && <IconComponent iconData={buttonData.icon}></IconComponent>}
                 <Text>
                        {this.props.buttonData.display_text}
                 </Text>
            </View>
            </TouchableHighlight>
        )
    }
}
