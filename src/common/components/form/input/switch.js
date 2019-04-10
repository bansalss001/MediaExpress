import React, { Component } from 'react';
import { StyleBuilder } from '../../../assests';
import { Switch , Text} from 'react-native';

export default class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount() {
        this.setState({ value: this.props.switchData.defaultValue ? this.props.switchData.defaultValue : false });
        this.props.changeValue(this.props.switchData.parameterName,this.state.value,false);
    }
    onPress = () => {
        this.setState({ value: !this.state['value'] });
        this.props.changeValue && this.props.changeValue(this.props.switchData.parameterName,this.state.value,false);
    }

    render() {
        let switchData = this.props.switchData;
        return (
            <View style={StyleBuilder(''+switchData.class)}>
                <Switch
                    disabled = {switchData.readOnly}
                    onValueChange={this.onPress()}
                    value={this.state['value']}
                >
                </Switch>
            <TouchableHighlight style={StyleBuilder('defaultIcon')} onPress={switchData.label && switchData.label.onPress} underlayColor='transparent'>
                {switchData.label && <Text style={StyleBuilder('h4 groupFieldLabel ' + switchData.label.class)}>{switchData.label.name}{(textInputData.validation && textInputData.validation.required) ? ' *' : ''}</Text>}
            </TouchableHighlight>
            </View>
        );
    }
}