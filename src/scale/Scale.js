import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component{

    state={
        animation: new Animated.Value(1)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue: -2,
            duration: 1500
        }).start()
    }
    
    render(){
        const animationStyle={
            transform:[
                {
                    scale: this.state.animation
                }
            ]
        }
        
        return(<View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, animationStyle]}>
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
        
        width:150,
        height: 150,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})