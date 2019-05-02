import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleBuilder } from '../../../assests';
import { TouchableHighlight } from 'react-native';

export default class IconComponent extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount() {
        this.setState({ pressed: false });
        this.setState({ pressedIconColor: this.props.iconData.iconColor != 'blue' ? 'blue' : 'black' });
    }
    onPress = () => {
        if (this.props.onPress) {
            this.props.onPress();
            this.props.changeValue && this.setState({ pressed: !this.state['pressed'] });
        }
        else {
            return null;
        }
    }

    render() {
        let iconData = this.props.iconData;
        return (
            <TouchableHighlight style={StyleBuilder('defaultIcon')} onPress={this.onPress} underlayColor='transparent'>
                <Icon
                    name={iconData.iconName}
                    size={iconData.iconSize ? iconData.iconSize : 20}
                    color={this.state['pressed'] ? this.state['pressedIconColor'] : iconData.iconColor}
                />
            </TouchableHighlight>
        );
    }
}