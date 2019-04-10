import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import TextFieldComponent from './input/textField';
import ButtonComponent from './input/button';
import PasswordComponent from './input/password';
import TextAreaComponent from './input/textarea';
import DropOptionsComponent from './input/dropOptions';
import SwitchComponent from './input/switch';
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
  }

  checkRequiredFields() {
    let groups = this.props.formData['groups'];
    if (groups)
      for (let group in groups) {
        for (let field in groups[group]['fields']) {
          if (groups[group]['fields'][field]['validation'] && groups[group]['fields'][field]['validation']['required']) {
            if (!this.state[groups[group]['fields'][field]['parameterName']] || this.state[groups[group]['fields'][field]['parameterName']] == '') {
              this.props.formData['groups'][group]['fields'][field]['errorMessage'] = errorConfig['isRequired'];
            }
          }
        }
      }
  }

  render() {
    let formData = this.props.formData;
    return (
      <View style={StyleBuilder('formMain')}>
        <View style={StyleBuilder('formComponent ' + formData.class)}>
          {/* Renders Group Header*/}
          {formData.header && <Text style={StyleBuilder('h1 center ' + formData.header.headerClass)}>{formData.header.formName}</Text>}
          { /* Genrate Data  To Render Group Fields */
            formData.groups && formData.groups.map((group, index) => {
              return (
                <View style={StyleBuilder('groupView ' + group.groupClass)} key={'group_' + index + '_' + group.groupName}>
                  {group.groupHeader && <Text style={StyleBuilder('h2 center ' + group.groupHeader.headerClass)}>{group.groupHeader.groupName}</Text>}
                  { /* Genrate Data  To Render Group Fields */
                    group.fields && group.fields.map((field, index) => {
                      switch (field.type) {
                        case 'textField':
                          return <TextFieldComponent style={StyleBuilder('groupFields')} textInputData={field} key={'textfield_' + index} onChange={this.updateFormFieldValues}></TextFieldComponent>
                        case 'password':
                          return <PasswordComponent style={StyleBuilder('groupFields')} passwordData={field} key={'password_' + index} onChange={this.updateFormFieldValues}></PasswordComponent>
                        case 'textArea':
                          return <TextAreaComponent style={StyleBuilder('groupFields')} textAreaData={field} key={'password_' + index} onChange={this.updateFormFieldValues}></TextAreaComponent>
                        case 'dropOption':
                          return <DropOptionsComponent style={StyleBuilder('groupFields')} dropOptionData={field} key={'password_' + index} onChange={this.updateFormFieldValues}></DropOptionsComponent>
                        case 'switch':
                          return <SwitchComponent style={StyleBuilder('groupFields')} switchData={field} key={'password_' + index} onChange={this.updateFormFieldValues}></SwitchComponent> 
                      }
                    })
                  }
                  { /* Genrate Group Buttons */
                    group.groupButtons && group.groupButtons.map((button, index) => <ButtonComponent style={StyleBuilder('groupFields')} buttonData={button} key={'group_button_' + index}></ButtonComponent>)
                  }
                </View>
              )
            })
          }
          <View style={StyleBuilder('buttonGroup')}>
            {formData.buttons && formData.buttons.map((buttons, index) => <ButtonComponent style={StyleBuilder('groupFields')} buttonData={buttons} key={'button_' + index}></ButtonComponent>)}
          </View>
        </View>
      </View>
    );
  }
}
