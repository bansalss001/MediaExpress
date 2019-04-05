import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { StyleBuilder } from '../../../../common/assests/index';
import { BaseClass } from '../../../../helpers/baseClass';
errorConfig = require('../../../../../configs/errors.json');
configValues = require('../../../../../configs/values.json');
import IconComponet from './icon';

/* 
    Used as : --
    
    <TextAreaComponent style={StyleBuilder('groupFields')} textAreaData={field} key={index} onChange={this.updateFormFieldValues} errorMessage={errorMessage}></TextAreaComponent>
*/
export default class TextAreaComponent extends BaseClass {
    errorMessage = undefined;
    constructor() {
        super();
        this.state = { errorMessage: undefined, returnValue: '' }
    }
    componentDidMount() {
        this.setState({ errorMessage: this.props.errorMessage });
        this.checkValidation(this.props.textAreaData.defaultValue);
        if (this.props.textAreaData['defaultValue'])
            this.setState({ returnValue: this.props.textAreaData['defaultValue'] });
    }

    checkValidation = (value) => {
        let validations = this.props.textAreaData.validation;
        if (this.isNotUndefined(validations) && this.isNotUndefined(value) && value != '') {
            if (validations.minLength && value.length < validations.minLength) {
                this.setState({ errorMessage: errorConfig.minLength + validations.minLength });
                return false;
            }
            else if (validations.maxLength && value.length > validations.maxLength) {
                this.setState({ errorMessage: errorConfig.maxLength + validations.maxLength });
                return false;
            }
            else if (validations.regex_pattern && !this.validateRegex(value, validations['regex_pattern']['config_file_value'])) {
                this.setState({ errorMessage: this.getRegexErrorMessge(validations['regex_pattern']['config_file_value']) });
                return false;
            }
            else if (validations.type && !this.validateRegex(value, validations.type)) {
                this.setState({ errorMessage: this.getRegexErrorMessge(validations.type) });
                return false;
            }
            else
                return true;
        }
        return true;
    }


    onChange = (value) => {
        this.setState({ returnValue: value })
        let pass = this.checkValidation(this.state.value);
        this.props.onChange(this.props.textAreaData.parameterName, this.state.returnValue, pass);
        if (pass) {
            this.setState({ errorMessage: undefined });
        }

    }


    render() {
        let textAreaData = this.props.textAreaData;
        return (
            <View>
                {textAreaData.label && <Text style={StyleBuilder('h4 groupFieldLabel ' + textAreaData.label.class)}>{textAreaData.label.name}{(textAreaData.validation && textAreaData.validation.required) ? ' *' : ''}</Text>}
                <View style={StyleBuilder('textFieldComponent')}>
                    {textAreaData.leftIcon && <IconComponet iconData={textAreaData.leftIcon} style={StyleBuilder('flexLeft')}> </IconComponet>}
                    <TextInput
                        placeholder={textAreaData.placeHolder}
                        multiline={true}
                        numberOfLines={textAreaData.numberOfLines}
                        keyboardType={textAreaData.keyboardType}
                        editable={textInputData.readOnly ? false : true}
                        value={this.state.returnValue}
                        secureTextEntry={textAreaData.validation && textAreaData.validation.isPassword}
                        style={StyleBuilder('textField ' + textAreaData.class)}
                        onChange={(value) => this.onChange(value.nativeEvent.key)}
                    />
                    {textAreaData.rightIcon && <IconComponet iconData={textAreaData.rightIcon} style={StyleBuilder('flexRight')}> </IconComponet>}
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
