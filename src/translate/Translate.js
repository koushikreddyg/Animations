import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component{

    state={
        animated: new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animated, {
            toValue: 300,
            duration: 1500
        }).start(()=>{
            this.state.animated.setValue(0)
        })
    }
    
    render(){
        const animationStyle={
            transform:[
                {
                    translateX: this.state.animated
                }
            ]
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