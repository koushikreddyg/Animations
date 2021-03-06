import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component{

    state={
        animated: new Animated.Value(0),
    }

    startAnimation=()=>{
        Animated.timing(this.state.animated,{
            toValue: 360,
            duration: 2000
        }).start()
    }

    render(){  
       const rotateInterpolate= this.state.animated.interpolate({
           inputRange:[0, 360],
           outputRange:["0deg", "360deg"]
       })
       const animatedStyles= {
           transform: [{
               rotate: rotateInterpolate
           }]
       }
        return(<View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, animatedStyles]}>
            <Animated.Text >This is animated view</Animated.Text>
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