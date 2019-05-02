import * as React from 'react';
import { View } from 'react-native';
import FormComponent from '../../common/components/form/formComponent';
import FORM from '../../common/Models/form.model';
import { StyleBuilder } from '../../common/assests';
import { NavigationScreenProp, ScrollView } from 'react-navigation';

export default class SignUpComponent extends React.Component<{ children: React.ReactNode, navigation: NavigationScreenProp<any, any> }> {
    formData: FORM;
    constructor(props: any) {
        super(props);
        this.formData = {
                fields: [{
                    type: 'textField',
                    label: {
                        name: 'Name'
                    },
                    parameterName: 'name',
                    placeHolder: 'Eg. Robert Smith',
                    validation: {
                        required: true
                    },
                    leftIcon: {
                        iconName: 'star'
                    }
                },
                {
                    type: 'textField',
                    label: { name: 'Email' },
                    parameterName: 'email',
                    placeHolder: 'Eg. abc@xyz.com',
                    keyboardType: 'email-address',
                    validation: {
                        required: true
                    },
                    leftIcon: {
                        iconName: 'envelope'
                    }
                }, {
                    type: 'textField',
                    label: { name: 'Mobile Number' },
                    parameterName: 'mobileNumber',
                    placeHolder: 'Eg. 99999-99999',
                    keyboardType: 'number-pad',
                    validation: {
                        required: true
                    },
                    leftIcon: {
                        iconName: 'mobile'
                    }
                }, {
                    type: 'password',
                    label: { name: 'Password' },
                    parameterName: 'password',
                    placeHolder: 'Password',
                    validation: {
                        required: true,
                    },
                    leftIcon: {
                        iconName: 'key'
                    }
                }],
            buttons: [
                {
                    display_text: 'Register',
                }
            ]
        }
    }

    render() {
        return (
            <View style={StyleBuilder('body auth')}>
                <FormComponent formData={this.formData} />
            </View>
        );
    }
}
