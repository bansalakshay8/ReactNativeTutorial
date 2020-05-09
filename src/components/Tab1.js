/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React,{Component} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

class Tab1 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    TAB 1
                </Text>
            </View>
        )       
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:20
    }
})

export default Tab1;