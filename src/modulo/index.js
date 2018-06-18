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

    state={
        animation: new Animated.Value(10)
    }

    
    
    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue: 12,
            duration: 3500
        }).start()
    }

    render() {
        const randomValue= 6;
        const newAnimation=Animated.modulo(this.state.animation, randomValue);
        const interpolate= newAnimation.interpolate({
            inputRange: [0,6],
            outputRange: ["0deg", "270deg" ]
        })
        const animatedStyle={
           transform:[{
               rotate: interpolate
           }]
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