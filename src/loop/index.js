import React from 'react';
import { 
    View, 
    Text,
     StyleSheet, 
     Animated, 
     TouchableWithoutFeedback, 
     Easing 
    } from 'react-native';

export default class App extends React.Component {

    state={
        animation: new Animated.Value(1)
    }
    
    startAnimation=()=>{
        /* this.state.animation.addListener(({value})=>{
            console.log(value)
        }) */
       Animated.loop( Animated.timing(this.state.animation, {
            toValue: 100,
           duration: 3000
        })).start()
    }

    render() {
        const animatedStyle={
            transform: [
                {
                    translateY: this.state.animation
                }
            ]
        }
        
        return (<View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.startAnimation}>
                <Animated.View style={[styles.box, animatedStyle]}>
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
        width: 150,
        /* top:0,
        right:0,
        left:0, */
        height: 150,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})