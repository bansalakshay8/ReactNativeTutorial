/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React,{Component} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

class RNSA extends Component{

    static navigationOptions = {
        drawerLabel: 'Screen A',
    };

    clickBtn=()=>{
        //this.props.navigation.toggleDrawer();
        this.props.navigation.navigate('Screen2');
    } 

    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Welcome to React native tutorial. Ist tutorial is of react navigation. click on following button to navigate.
                </Text>
                <Button onPress={this.clickBtn} title='Goto screen B'></Button>
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

export default RNSA;