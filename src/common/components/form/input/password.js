import React from 'react';
import { Input ,Icon } from 'react-native-elements';
import { View, Text  } from 'react-native';
import { StyleBuilder } from '../../../../common/assests/index';

export default class PasswordComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showPassword : false }
    }
    componentDidMount() {
        this.setState({ errorMessage: this.props.errorMessage })
    }
    render() {
        let passwordData = this.props.passwordData;
        return (
            <View>
                { passwordData.label && <Text style={StyleBuilder('h4 groupFieldLabel '+passwordData.label.class)}>{passwordData.label.name}{(passwordData.validation && passwordData.validation.required)?' *':''}</Text>}
                <Input
                    leftIcon={passwordData.leftIcon && { name: passwordData.leftIcon.name, type: passwordData.leftIcon.type, color: passwordData.leftIcon.color ,paddingRight : 10}}
                    rightIcon={<Icon name='eye' type='font-awesome' color={passwordData.leftIcon.color} onPress = {()=>this.setState({showPassword : !this.state.showPassword})}> </Icon>}
                    placeholder={passwordData.placeHolder}
                    keyboardType={passwordData.keyboardType}
                    shake={this.state['errorMessage'] ? true : false}
                    errorMessage={this.state['errorMessage']}
                    value={passwordData.defaultValue}
                    secureTextEntry={!this.state.showPassword}
                    containerStyle={StyleBuilder(passwordData.class)}
                    onChangeText={(value)=>this.props.onChange(passwordData.parameterName, value)}
                ></Input>
            </View>
        );

    }
}
