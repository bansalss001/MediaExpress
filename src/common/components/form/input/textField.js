import React, { Component } from 'react';
import { Input, Icon } from 'react-native-elements';
import { View, Text } from 'react-native';
import { StyleBuilder } from '../../../../common/assests/index';
errorConfig = require('../../../../../configs/errors.json');
configValues = require('../../../../../configs/values.json');

/* 
    Used as : --
    
    <TextFieldComponent style={StyleBuilder('groupFields')} textInputData={field} key={index} onChange={this.updateFormFieldValues} errorMessage={errorMessage}></TextFieldComponent>
*/
export default class TextFieldComponent extends Component {
    errorMessage = undefined;
    constructor(props) {
        super(props);
        this.state = { errorMessage: undefined }
    }
    componentDidMount() {
        this.setState({ errorMessage: this.props.errorMessage })
    }
    onChangeText = (value) => {
        let pass = this.checkValidation(value);
        this.props.onChange(this.props.textInputData.parameterName, value, pass);
        if (pass) {
            this.setState({ errorMessage: undefined });
        }
    }
    checkValidation = (value) => {
        let validations = this.props.textInputData.validation;
        console.log(value);
        if (validations.minLength && value.length < validations.minLength) {
            this.setState({ errorMessage: errorConfig.minLength + validations.minLength });
        }
        else if (validations.maxLength && value.length > validations.maxLength) {
            this.setState({ errorMessage: errorConfig.maxLength + validations.maxLength });
        }
        else if (validations.regex_pattern) {
            let patt = new RegExp(configValues['regex_pattern'][validations['regex_pattern']['config_file_value']]['regex']);
            if (!patt.test(value)) {
                this.setState({ errorMessage: configValues['regex_pattern'][validations['regex_pattern']['config_file_value']]['errorMessage'] });
            }
            else
                return true;
        }
        else if (validations.type == 'number' || validations.type == 'string') {
            let patt = new RegExp(configValues['regex_pattern'][validations.type]['regex'])
            if (!patt.test(value)) {
                this.setState({ errorMessage: configValues['regex_pattern'][validations.type]['errorMessage'] });
            }
            else
                return true;
        }
        else
            return true;

        return false;

    }


    render() {
        let textInputData = this.props.textInputData;
        return (
            <View>
                {textInputData.label && <Text style={StyleBuilder('h4 groupFieldLabel ' + textInputData.label.class)}>{textInputData.label.name}{(textInputData.validation && textInputData.validation.required) ? ' *' : ''}</Text>}
                <Input
                    leftIcon={textInputData.leftIcon && { name: textInputData.leftIcon.name, type: textInputData.leftIcon.type, color: textInputData.leftIcon.color, paddingRight: 10 }}
                    rightIcon={textInputData.rightIcon && { name: textInputData.rightIcon.name, type: textInputData.rightIcon.type, color: textInputData.rightIcon.color }}
                    placeholder={textInputData.placeHolder}
                    multiline={textInputData.multiline}
                    numberOfLines={textInputData.numberOfLines}
                    editable={textInputData.editable}
                    keyboardType={textInputData.keyboardType}
                    shake={this.state['errorMessage'] ? true : false}
                    errorMessage={this.state['errorMessage']}
                    value={textInputData.defaultValue}
                    secureTextEntry={textInputData.validation && textInputData.validation.isPassword}
                    containerStyle={StyleBuilder(textInputData.class)}
                    onChangeText={(value) => this.onChangeText(value)}
                    errorStyle={StyleBuilder('errorMessage')}
                ></Input>
            </View>
        );

    }
}
