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
        colorAnimation: new Animated.Value(0),
        scaleAnimation: new Animated.Value(1)
    }

    
    
    startAnimation=()=>{
    Animated.sequence([
        Animated.timing(this.state.colorAnimation,{
            toValue: 1,
            duration: 300
        }), Animated.timing(this.state.scaleAnimation,{
            toValue: 2,
            duration: 500
        })
    ]).start()
    
    }

    render() {
        
        const backgroundColorInterpolate= this.state.colorAnimation.interpolate({
            inputRange: [0,1],
            outputRange: ["rgb(255,99, 71)", "rgb(71, 99,255)" ]
        })
        const animatedStyle={
           backgroundColor: backgroundColorInterpolate,
           transform: [
               {
                   scale: this.state.scaleAnimation
               }
           ] 
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