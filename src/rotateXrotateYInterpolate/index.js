import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback,
    Easing,
    PanResponder
} from 'react-native';

export default class App extends React.Component {

    state = {
        animation: new Animated.Value(0),
    }



    startAnimation = () => {

        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 2000
        }).start(() => {
            this.state.animation.setValue(0)
            })  
    }

    render() {

        const colorInterpolate= this.state.animation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: ["rgb(71,255,99)", "rgb(255,99,71)","rgb(99, 71, 255)"]
        })

        const bgStyle= {backgroundColor: this.state.animation.interpolate({
            inputRange: [0,1],
            outputRange: ["rgba(255,99,71, 1)", "rgba(255,99,71, 0)"]
        })}

        const xInterpolate= this.state.animation.interpolate({
            inputRange: [0,1],
            outputRange: ["0deg", "360deg"]
        })

        const yInterpolate= this.state.animation.interpolate({
            inputRange: [0, 0.5,1],
            outputRange: ["0deg", "0deg", "180deg"]
        })

        const animatedStyle={
            backgroundColor: colorInterpolate,
            transform:[ {
                rotateX: xInterpolate
            },{
                rotateY: yInterpolate
            }]
        }

        return (<Animated.View style={[styles.container, bgStyle]}>
            <TouchableWithoutFeedback onPress={this.startAnimation}>
                <Animated.View
                    style={[styles.box, animatedStyle]} >
                    <Animated.Text >This is animated view</Animated.Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </Animated.View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        //position: 'absolute',
        width: 130,
        /* top:0,
        right:0,
        left:0, */
        height: 130,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})