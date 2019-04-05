import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { StyleBuilder } from '../../../../common/assests/index';
import { BaseClass } from '../../../../helpers/baseClass';
errorConfig = require('../../../../../configs/errors.json');
configValues = require('../../../../../configs/values.json');
import IconComponet from './icon';

/* 
    Used as : --
    
    <TextFieldComponent style={StyleBuilder('groupFields')} textInputData={field} key={index} onChange={this.updateFormFieldValues} errorMessage={errorMessage}></TextFieldComponent>
*/
export default class TextFieldComponent extends BaseClass {
    errorMessage = undefined;
    constructor() {
        super();
        this.state = { errorMessage: undefined, returnValue: '' }
    }
    componentDidMount() {
        this.setState({ errorMessage: this.props.textInputData.errorMessage });
        this.checkError(this.props.textInputData.defaultValue);
        if (this.props.textInputData['validation'] && this.props.textInputData['validation']['maskedText'] && this.props.textInputData['defaultValue']) {
            this.setState({ returnValue: this.maskedText(this.props.textInputData['defaultValue']) });
        }
        else if (this.props.textInputData['defaultValue'])
            this.setState({ returnValue: this.props.textInputData['defaultValue'] });
    }

    checkError = (value) => {
        let validations = this.props.textInputData.validation;
        if (this.isNotUndefined(validations) && this.isNotUndefined(value) && value != '') {
            if (validations.minLength && value.length < validations.minLength) {
                this.setState({ errorMessage: errorConfig.minLength + validations.minLength });
                return true;
            }
            else if (validations.maxLength && value.length > validations.maxLength) {
                this.setState({ errorMessage: errorConfig.maxLength + validations.maxLength });
                return true;
            }
            else if (validations.regex_pattern && !this.validateRegex(value, validations['regex_pattern']['config_file_value'])) {
                this.setState({ errorMessage: this.getRegexErrorMessge(validations['regex_pattern']['config_file_value']) });
                return true;
            }
            else if (validations.type && !this.validateRegex(value, validations.type)) {
                this.setState({ errorMessage: this.getRegexErrorMessge(validations.type) });
                return true;
            }
            else
                return false;
        }
        return false;
    }

    maskedText(value) {
        let maskText = this.props.textInputData['validation']['maskedText'];
        let tempValue = [];
        if (this.isNotUndefined(maskText)) {
            let maskArray = maskText.split('');
            value = value.split('');
            for (let i in maskArray) {
                if (maskArray[i] != "0") {
                    tempValue.splice(i, 0, maskArray[i]);
                }
                if (this.isUndefined(value[i])) {
                    break;
                }
                else if (value[i] != maskArray[i])
                    tempValue.splice(i, 0, value[i]);

            }
            return tempValue.join('');
        }
        return value;
    }

    validateInputTextType = (value) => {
        let textType = this.props.textInputData.validation && this.props.textInputData.validation.type;

        if (this.isNotUndefined(textType)) {
            switch (textType) {
                case 'number': {
                    if ('1234567890'.indexOf(value) != -1) {
                        return true;
                    }
                    break;
                }
                case 'string': {
                    if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '.indexOf(value) != -1) {
                        return true;
                    }
                    break;
                }
                default:
                    return false;
            }
            return false;
        }
        return true;
    }

    onKeyPress = (value) => {
        if (['Enter', 'Backspace'].indexOf(value) == -1) {
            if (this.validateInputTextType(value)) {
                this.setState({ returnValue: this.maskedText(this.state.returnValue + value) })
                let error = this.checkError(this.state.value);
                this.props.onChange(this.props.textInputData.parameterName, this.state['returnValue'], error);
                if (!error) {
                    this.setState({ errorMessage: undefined });
                }
            }
        }
        else if (value == 'Backspace') {
            this.setState({ returnValue: this.state['returnValue'].slice(0, this.state['returnValue'].length - 1) })
        }
    }


    render() {
        let textInputData = this.props.textInputData;
        return (
            <View>
                {textInputData.label && <Text style={StyleBuilder('h4 groupFieldLabel ' + textInputData.label.class)}>{textInputData.label.name}{(textInputData.validation && textInputData.validation.required) ? ' *' : ''}</Text>}
                <View style={StyleBuilder('textFieldComponent')}>
                    {textInputData.leftIcon && <IconComponet iconData={textInputData.leftIcon}  style={StyleBuilder('flexLeft')}> </IconComponet>}
                    <TextInput
                        placeholder={textInputData.placeHolder}
                        keyboardType={textInputData.keyboardType}
                        value={this.state.returnValue}
                        editable={textInputData.readOnly ? false : true}
                        secureTextEntry={textInputData.validation && textInputData.validation.isPassword}
                        style={StyleBuilder('textField '+textInputData.class)}
                        onKeyPress={(value) => this.onKeyPress(value.nativeEvent.key)}
                    />
                    {textInputData.rightIcon && <IconComponet iconData={textInputData.rightIcon}  style={StyleBuilder('flexRight')}> </IconComponet>}
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
