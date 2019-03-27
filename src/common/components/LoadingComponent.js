import React from 'react';
import { View, Text, MaskedViewIOS, Animated, Image, StyleSheet } from 'react-native';
import { StyleBuilder } from '../assests';
import { ImagesIcon , AppColor } from '../assests'


export default class LoadingComponent extends React.Component {
    state = {
        loadingProgress: new Animated.Value(0),
        animationDone: false,
    };
    constructor(props) {
        super(props);
    }
    componentWillUpdate(nextprops) {
        if(nextprops['isLoaded']){
        Animated.timing(this.state.loadingProgress, {
            toValue: 80,
            duration: 5000,
            useNativeDriver: true,
        }).start(() => {
            this.setState({
                animationDone: true,
            });
        });
    }
    }

    render() {
        const loadingProgress = this.state.loadingProgress;

        const opacityClearToVisible = {
            opacity: loadingProgress.interpolate({
                inputRange: [0, 15, 30],
                outputRange: [0, 0, 1],
                extrapolate: 'clamp',
            }),
        };

        const imageScale = {
            transform: [
                {
                    scale: loadingProgress.interpolate({
                        inputRange: [0, 10, 70],
                        outputRange: [1, 0.8, 40],
                    }),
                },
            ],
        };

        const appScale = {
            transform: [
                {
                    scale: loadingProgress.interpolate({
                        inputRange: [0, 100],
                        outputRange: [1.1, 1],
                    }),
                },
            ],
        };
        return (
            <View style={StyleBuilder('loaderView')}>
                <MaskedViewIOS
                    style={StyleBuilder('loaderView')}
                    maskElement={
                        <View style={StyleBuilder('loader')}>
                            <Animated.Image
                                style={[StyleBuilder('loaderImage'), imageScale]}
                                source={ImagesIcon['splashScreenIcon']}
                            />
                            <Text style={StyleBuilder('loaderText')}>Loading...</Text>
                        </View>
                    }>
                    {this.state.animationDone ? null : <View style={[StyleSheet.absoluteFill, { backgroundColor: AppColor['lauchScreen'] }]} />}
                    <Animated.View style={[opacityClearToVisible, { flex: 1 }]}>
                        {this.props.children}
                    </Animated.View>
                </MaskedViewIOS>

            </View>
        );
    }
}