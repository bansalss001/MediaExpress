import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleBuilder } from '../../../assests'

export default class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let buttonData = this.props.buttonData;
        return (
            <Button
                icon={
                    <Icon
                        name={buttonData.icon && buttonData.icon.iconName}
                        size={buttonData.icon && buttonData.icon.iconSize}
                        color={buttonData.icon && buttonData.icon.iconColor}
                    />
                }
                title={this.props.buttonData.display_text}
                onPress={this.props.buttonData.onPress}
                disabled={this.props.buttonData.disabled}
                type={this.props.buttonData.type}
                buttonStyle={StyleBuilder('button '+buttonData.buttonClass)}
            ></Button>
        );

    }
}
