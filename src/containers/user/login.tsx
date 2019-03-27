import * as React from 'react';
import { View, Image } from 'react-native';
import { ImagesIcon } from '../../common/assests';
import FormComponent from '../../common/components/form/formComponent';
import FORM from '../../common/Models/form.model';
import { StyleBuilder } from '../../common/assests';
import { NavigationScreenProp } from 'react-navigation';

export default class LoginComponent extends React.Component<{ children: React.ReactNode, navigation: NavigationScreenProp<any, any> }> {
  //Varibale
  formData: FORM;

  constructor(props: any) {
    super(props);
    this.formData = {
      groups: [{
        groupHeader: {
          groupName: 'Login'
        },
        fields: [{
          type: 'textField',
          parameterName: 'username',
          label: { name: 'Username' },
          placeHolder: 'Eg. abc@xyz.com',
          keyboardType: 'email-address',
          validation: {
            required: true,
            minLength:1,
            maxLength:2,
            type: 'number'
          },
          leftIcon: {
            name: 'user',
            type: 'font-awesome',
            color: 'black'
          }
        }, {
          type: 'password',
          label: { name: 'Password' },
          parameterName: 'password',
          placeHolder: 'Password',
          validation: {
            required: true
          },
          leftIcon: {
            name: 'key',
            type: 'font-awesome',
            color: 'black'
          }
        }],
      },
      ],
      buttons: [
        {
          display_text: 'SignUp',
          onPress: () => this.props.navigation.navigate('SignUp')
        },
        {
          display_text: 'Login',
        }
      ]
    }
  }

  render() {
    return (
      <View style={StyleBuilder('body auth')}>
        <View style={StyleBuilder('center')}>
          <Image source={ImagesIcon.appIcon} style={StyleBuilder('authIcon')} />
        </View>
        <FormComponent formData={this.formData} />
      </View>
    );
  }
}
