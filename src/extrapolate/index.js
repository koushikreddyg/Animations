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
        animation: new Animated.Value(1),
    }



    startAnimation = () => {

        Animated.timing(this.state.animation, {
            toValue: 3,
            duration: 2000
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 2000
            }).start()
            })  
    }

    render() {

        const scaleInterpolate= this.state.animation.interpolate({
            inputRange: [1,2],
            outputRange:[1,2],
            //extrapolate: "clamp",
            //extrpolate: "identity",
            extrapolateLeft: "clamp",
           // extrapolateRight: "clamp"

        })

        
        const animatedStyle={
            transform:[{
                scale: scaleInterpolate
            }
                
            ]
        }

        return (<Animated.View style={[styles.container]}>
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