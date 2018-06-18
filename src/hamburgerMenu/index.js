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

    getDirectionAndColor=({dx,dy})=>{
        if(dx--){
            return 'dragged left'
        }else if(dx++){
            return 'dragged right'
        }else if(dy++){
            return 'dragged down'
        }else if(dy--){
            return 'dragged up'
        }
    }

export default class App extends React.Component {

    state={
        animation: new Animated.ValueXY(0)
    }

    

    componentWillMount(){
       /*  this._x=0,
        this._y=0,
        this.state.animation.addListener((value)=>{
            this._x=value.x;
            this._y= value.y

        }) */
        this._panResponder= PanResponder.create({
            onStartShouldSetPanResponder:()=> true,
            onMoveShouldSetPanResponder:(evt, gestureState)=>!!getDirectionAndColor(gestureState),
            onPanResponderGrant:(e, gestureState)=>{
                /* this.state.animation.setOffset({
                    x: this._x,
                    y: this._y
                });
                this.state.animation.setValue({
                    x:0,
                    y:0
                }) */
                this.state.animation.extractOffset()
            },
            onPanResponderTerminationRequest: () => true,
            onPanResponderMove:
                   // const drag = getDirectionAndColor(gestureState);
                   // console.log(drag);
                   Animated.event([
                    null,
                    {
                        dx:this.state.animation.x,
                        dy: this.state.animation.y
                    }]
                
                 ,{listener:(evt, gestureState) => {
                       const drag = getDirectionAndColor(gestureState);
                       console.log(drag)
                    } 
                 }),
             
                /* Animated.event([
                    null,
                    {
                        dx:this.state.animation.x,
                        dy: this.state.animation.y
                    } */
                // ],(event, gestureState) => {
                //     const drag = getDirectionAndColor(gestureState);
                //    console.log(drag)
                // }
               
                
                
            
        
            onPanResponderRelease: (e,{vx, vy})=>{
                Animated.decay(this.state.animation,{
                    velocity: {x: vx, y: vy},
                    deceleration:0
                }).start()
            } 
        })
    }
    
    startAnimation=()=>{
        
    }

    render() {
        const animatedStyle={
            transform: this.state.animation.getTranslateTransform()
        }
        
        return (<View style={styles.container}>
            
                <Animated.View 
                style={[styles.box, animatedStyle]} 
                {...this._panResponder.panHandlers}>
                    <Animated.Text >This is animated view</Animated.Text>
                </Animated.View>
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