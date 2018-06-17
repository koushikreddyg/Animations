import React from 'react';
import { 
    View, 
    Text,
     StyleSheet, 
     Animated, 
     TouchableWithoutFeedback, 
     Easing,
     ScrollView
    } from 'react-native';

export default class App extends React.Component {

    state={
        animation: new Animated.Value(0)
    }

    render() {
        const animatedStyles= this.state.animation.interpolate({
            inputRange: [0, 3000],
            outputRange: ["rgb(255, 91, 75)", "rgb(75, 91, 255)"]
        })
        const animatedStyle={
            backgroundColor: animatedStyles
        }
        
        return (<View style={[styles.container]}>
            <ScrollView
             scrollEventThrottle={1} 
             onScroll={Animated.event([
                 {
                     nativeEvent:{
                         contentOffset:{
                             y: this.state.animation
                         }
                     }
                 }
             ])}
            >
                <Animated.View style={[styles.box, animatedStyle]}>
                    <Animated.Text >This is animated view</Animated.Text>
                </Animated.View>
            </ScrollView>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /* justifyContent: 'center',
        alignItems: 'center', */
        //backgroundColor: 'red',

    },
    box: {
        height: 3000
    }
})

/* (e)=>{
    this.state.animation.setValue(e.nativeEvent.contentOffset.y)
 } */