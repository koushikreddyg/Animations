import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component{

    state={
        animation: new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:1,
            duration: 2400
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue:0,
                duration: 2400
            }).start()
        })
    }
   
    render(){  
        const boxInterpolation= this.state.animation.interpolate({
                inputRange:  [0,1],
                outputRange: ["rgb(255, 99, 71)", "rgb(99, 71, 255)"]
            });
        const colorInterpolation=this.state.animation.interpolate({
            inputRange:  [0,1],
            outputRange: [ "rgb(99, 71, 255)", "rgb(255, 99, 71)"]
        });
            const boxAnimatedStyle={
                backgroundColor: boxInterpolation
            }
        
        const textAnimatedStyle={
            color: colorInterpolation
        }
        return(<View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, boxAnimatedStyle]}>
            <Animated.Text style={textAnimatedStyle}>This is animated view</Animated.Text>
            </Animated.View>
            </TouchableWithoutFeedback>
            </View>)
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box:{
        //position: 'absolute',
        width:150,
        /* top:0,
        right:0,
        left:0, */
        height: 150,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})