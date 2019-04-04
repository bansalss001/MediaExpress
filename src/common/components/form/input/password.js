import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { StyleBuilder } from '../../../../common/assests/index';
import IconComponet from './icon';

export default class PasswordComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPassword: false }
    }
    componentDidMount() {
        this.setState({ errorMessage: this.props.errorMessage })
    }
    render() {
        let passwordData = this.props.passwordData;
        let passwordIconData = { iconName: 'eye', iconColor: passwordData.rightIcon && passwordData.rightIcon.iconColor };
        return (
            <View>
                {passwordData.label && <Text style={StyleBuilder('h4 groupFieldLabel ' + passwordData.label.class)}>{passwordData.label.name}{(passwordData.validation && passwordData.validation.required) ? ' *' : ''}</Text>}
                <View style={StyleBuilder('textFieldComponent')}>
                    {passwordData.leftIcon && <IconComponet iconData={passwordData.leftIcon} style={StyleBuilder('flexLeft')} > </IconComponet>}
                    <TextInput
                        placeholder={passwordData.placeHolder}
                        keyboardType={passwordData.keyboardType}
                        value={passwordData.defaultValue}
                        secureTextEntry={!this.state.showPassword}
                        style={StyleBuilder('textField '+passwordData.class)}
                        onChangeText={(value) => this.props.onChange(passwordData.parameterName, value , false)}
                    />
                    <IconComponet iconData={passwordIconData} onPress={() => this.setState({ showPassword: !this.state.showPassword })} style={StyleBuilder('flexRight')} changeValue={true}> </IconComponet>
                </View>
                {this.state['errorMessage'] &&
                    <Text style={StyleBuilder('errorMessage')}>
                        {this.state['errorMessage']}
                    </Text>
                }
            </View>
        );

    }
}
