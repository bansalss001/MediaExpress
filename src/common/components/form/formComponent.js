import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TextFieldComponent from './input/textField';
import ButtonComponent from './input/button';
import PasswordComponent from './input/password';
import TextAreaComponent from './input/textarea';
import DropOptionsComponent from './input/dropOptions';
import SwitchComponent from './input/switch';
import SliderComponent from './input/slider';
import { StyleBuilder } from '../../assests/style/lib/styleBuilder';
let errorConfig = require('../../../../configs/errors.json');


export default class FormComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({ formName: this.props.formData.header && this.props.formData.header.formName });
  }

  /*paramName : string, value : string, validation : boolean*/
  updateFormFieldValues = (paramName, value, validation) => {
    this.state[paramName] = {
      value: value,
      containError: validation
    };
    console.log(this.state);
  }

  checkRequiredFields() {
    let formData = this.props.formData;
    if (formData)
      for (let field in formData['fields']) {
          if (formData[field]['validation'] && formData[field]['validation']['required']) {
            if (!this.state[formData[field]['parameterName']] || this.state[formData[field]['parameterName']] == '') {
              this.props.formData[field]['errorMessage'] = errorConfig['isRequired'];
            }
          }
      }
  }

  render() {
    let formData = this.props.formData;
    return (
        <View style={StyleBuilder('formComponent ' + formData.class)}>
          {/* Renders Group Header*/}
          {formData.header && <Text style={StyleBuilder('h1 center ' + formData.header.headerClass)}>{formData.header.formName}</Text>}
            { /* Genrate Data  To Render Group Fields */
                formData.fields && formData.fields.map((field, index) => {
                  switch (field.type) {
                    case 'textField':
                      return <TextFieldComponent style={StyleBuilder('groupFields')} textInputData={field} key={'textfield_' + index} onChange={this.updateFormFieldValues}></TextFieldComponent>
                    case 'password':
                      return <PasswordComponent style={StyleBuilder('groupFields')} passwordData={field} key={'password_' + index} onChange={this.updateFormFieldValues}></PasswordComponent>
                    case 'textArea':
                      return <TextAreaComponent style={StyleBuilder('groupFields')} textAreaData={field} key={'textArea_' + index} onChange={this.updateFormFieldValues}></TextAreaComponent>
                    case 'dropOption':
                      return <DropOptionsComponent style={StyleBuilder('groupFields')} dropOptionData={field} key={'dropDown_' + index} onChange={this.updateFormFieldValues}></DropOptionsComponent>
                    case 'switch':
                      return <SwitchComponent style={StyleBuilder('groupFields')} switchData={field} key={'switch_' + index} onChange={this.updateFormFieldValues}></SwitchComponent>
                    case 'slider':
                      return <SliderComponent style={StyleBuilder('groupFields')} sliderData={field} key={'slider_' + index} onChange={this.updateFormFieldValues}></SliderComponent>
                  }
                })
            }
        <View style={StyleBuilder('buttonGroup')}>
            {formData.buttons && formData.buttons.map((buttons, index) => <ButtonComponent style={StyleBuilder('groupFields')} buttonData={buttons} key={'button_' + index}></ButtonComponent>)}
        </View>
      </View>
    );
  }
}
