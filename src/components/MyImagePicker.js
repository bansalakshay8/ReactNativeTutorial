/* eslint-disable prettier/prettier */
import React,{Component} from 'react'
import {View,Text,Button,StyleSheet,Image} from 'react-native'
import ImagePicker from 'react-native-image-picker'
class MyImagePicker extends Component{

    constructor(props){
        super(props)
        this.state={
            filePath:{}
        }
    }

    static navigationOptions = {
        drawerLabel: 'Image Picker',
    };
    
    pickImage = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    filePath: source,
                });
            }
        });
    };

    render(){
        return(
            <View style={styles.container}>
                {this.state.filePath !={} && <Text>asdsadasd</Text>}
                {/* <Image source={{uri:this.state.filePath.uri}} style={{ width: 250, height: 250 }}/> */}
                <Button onPress={this.pickImage} title='Pick Image'></Button>
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


export default MyImagePicker;