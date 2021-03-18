import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {increment, decrement} from './action';
import store from './store';
class Counter extends Component{
    subscribe= store.subscribe(()=>this.setState({ }))

     incrementHandler=()=>{
    store.dispatch(increment())
    };
     decrementHandler=()=>{
        store.dispatch(decrement())
    };
render(){
    return(
        <View style={styles.container}>
<Button title="INCREMENT" onPress={this.incrementHandler}/>
<Text>{store.getState().counter}</Text>
<Button title="DECREMENT" onPress={this.decrementHandler}/>
        </View>
    );
}
    
    }



export default Counter;



const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});