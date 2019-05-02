import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleBuilder } from '../../../assests';
import { View , Text , Slider} from 'react-native';

export default class SliderComponent extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount() {
        this.setState({ selected: false });
    }
    onSliding=(value)=>{
        let sliderData = this.props.sliderData;
        if(sliderData['validation']) {
            switch (sliderData['validation']['type']) {
                case 'number' : {
                    this.props.onChange(sliderData.parameterName, Math.round(value) , false);
                    break
                }
                case 'decimal' : {
                    this.props.onChange(sliderData.parameterName, Math.round(value*100)/100 , false);
                    break;
                }
                default : {
                    this.props.onChange(sliderData.parameterName, value , false);
                }

            }
        }
        
    }
    render() {
        let sliderData = this.props.sliderData;
        return (
           <View>
           {sliderData.label && <Text style={StyleBuilder('h4 groupFieldLabel ' + sliderData.label.class)}>{sliderData.label.name}{(sliderData.validation && sliderData.validation.required) ? ' *' : ''}</Text>}
           <View style={StyleBuilder('textFieldComponent')}>
                <Slider 
                    style={StyleBuilder('slider')}
                    disabled={sliderData.readOnly}
                    value={sliderData.defaultValue}
                    minimumValue={sliderData['validation']['minValue']}
                    maximumValue={sliderData['validation']['maxValue']}
                    onValueChange={(value) => this.onSliding(value)}
                >
                </Slider>
           </View>
           </View>
        );
    }
}
