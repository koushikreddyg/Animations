import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component{

    state={
        animation: new Animated.Value(1)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue:0,
            duration: 350
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue: 1,
                duration: 2000
            }).start()
        })
    }

    render(){
        const animationStyle={
            opacity: this.state.animation
        }
        return(<View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, animationStyle]}/>
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
        
        width:150,
        height: 150,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})