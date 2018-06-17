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
        animation: new Animated.Value(0)
    }

    startAnimation=()=>{
        Animated.timing(this.state.animation,{
            toValue: 1,
            duration: 5000,
            //easing: Easing.back(1)
            //easing: Easing.bounce
            //easing: Easing.elastic(5)
            easing: Easing.bezier(1,1, 0.86,0.23)
        }).start()
    }

    render() {
        const widthInterpolate= this.state.animation.interpolate({
            inputRange: [0,1],
            outputRange: ['20%', '50%'],
        })
 
        const heightInterpolate= this.state.animation.interpolate({
            inputRange: [0,1],
            outputRange: ["20%", "30%"],
        })
 
        const animatedStyles={
            width: widthInterpolate,
            height: heightInterpolate,
        }
 

        return (<View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.startAnimation}>
                <Animated.View style={[styles.box, animatedStyles]}>
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
        //width: 150,
        /* top:0,
        right:0,
        left:0, */
        //height: 150,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})