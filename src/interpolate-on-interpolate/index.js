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
            duration: 1000
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 2,
                duration: 2000
            }).start()
            })  
    }

    render() {

        const animatedInterpolate=this.state.animation.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 300, 0] 
        })

        const interpolatedInterpolate=animatedInterpolate.interpolate({
            inputRange: [0,300],
            outputRange: [1, 0.2]
        })
        const interpolateXInterpolate= animatedInterpolate.interpolate({
            inputRange:[0, 30, 50, 80, 100, 150, 299, 300],
            outputRange: [0, -30, -50, 80, -100, 300, 0, -100]
        })

        const animatedStyle={
            transform:[
                {
                    translateY: animatedInterpolate,
                   
                },{
                    translateX: interpolateXInterpolate
                }
            ],
            opacity: interpolatedInterpolate
        }

        return (<View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.startAnimation}>
                <Animated.View
                    style={[styles.box, animatedStyle]} >
                    <Animated.Text >This is animated view</Animated.Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>)
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