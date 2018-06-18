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
        animation: new Animated.Value(0)
    }

    
    
    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue: 30,
            duration: 1500
        }).start(()=>{
            Animated.timing(this.state.animation,{
                toValue: 0,
                duration: 200
            }).start()
        })
    }

    render() {
        const randomValue= new Animated.Value(6);
        const newAnimation=Animated.multiply(this.state.animation, randomValue)
        const animatedStyle={
           transform:[{
               translateY: newAnimation
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