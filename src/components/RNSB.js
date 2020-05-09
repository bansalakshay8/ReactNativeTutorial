/* eslint-disable prettier/prettier */
import React,{Component} from 'react'
import {View,Text,Button,StyleSheet,Scroll} from 'react-native'

class RNSB extends Component{

    static navigationOptions = {
        drawerLabel: 'Screen B',
    };
    
    clickBtn=()=>{
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>
                   This is screen B. Navigating using react navigation.
                </Text>
                <Button onPress={this.clickBtn} title='Goto screen A'></Button>
            </View>
        )       
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:20
    }
})


export default RNSB;