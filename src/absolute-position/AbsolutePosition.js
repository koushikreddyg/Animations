import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component{

    state={
        animation: new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue: 40,
            duration: 2000,
        }).start();
    }
   
    render(){  
        const animatedStyles={
           top: this.state.animation,
           left: this.state.animation,
           right: this.state.animation
        }
        return(<View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, animatedStyles]}>
            <Text>This is animated view</Text>
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
        position: 'absolute',
        //width:150,
        top:0,
        right:0,
        left:0,
        height: 150,
        backgroundColor: 'red',
        //justifyContent: 'center',
        //alignItems: 'center'
    }
})