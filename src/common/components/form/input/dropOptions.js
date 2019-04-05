import React from 'react';
import { View, TouchableHighlight, Text, Picker } from 'react-native';
import { StyleBuilder } from '../../../assests';
import IconComponent from './icon';

export default class DropOptionsComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let dropOptionData = this.props.dropOptionData;
        return (
            <View>
                {dropOptionData.label && <Text style={StyleBuilder('h4 groupFieldLabel ' + dropOptionData.label.class)}>{dropOptionData.label.name}{(dropOptionData.validation && dropOptionData.validation.required) ? ' *' : ''}</Text>}
                <View style={StyleBuilder('textFieldComponent')}>
                    {dropOptionData.icon && <IconComponent iconData={dropOptionData.icon}></IconComponent>}
                    <Picker
                        selectedValue = {dropOptionData.defaultValue ? dropOptionData.defaultValue : null}
                        style = {StyleBuilder(' ' + dropOptionData.class)}
                        onValueChange={}
                        enabled={dropOptionData.readOnly ? false : true }
                       >
                       {dropOptionData.selectionOptions && dropOptionData.selectionOptions.map((option,index)=>{
                           if(option.nextLine)
                           {
                               return <View />
                           }
                           else {
                               return <Picker.Item label={option.label} value={option.value} key={'options_'+index}/>
                           }
                       })}
                       </Picker>
                    {dropOptionData.rightIcon && <IconComponet iconData={dropOptionData.rightIcon}  style={StyleBuilder('flexRight')}> </IconComponet>}
                </View>
                {this.state['errorMessage'] &&
                    <Text style={StyleBuilder('errorMessage')}>
                        {this.state['errorMessage']}
                    </Text>
                }
            </View>
        )
    }
}
