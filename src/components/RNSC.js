/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';


import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';



const BottomNavigatorExample = createMaterialBottomTabNavigator(
    {
      Tab1: { 
        screen: Tab1,
        navigationOptions: {
          title:'Home',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
            </View>
          )
        } 
      },
      Tab2: { 
        screen: Tab2,
        navigationOptions: {
          title:'Cart',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
            </View>
          )
        } 
      },
      Tab3: { 
        screen: Tab3,
        navigationOptions: {
          title:'Profile',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
            </View>
          )
        }
      },
    },
    {
      initialRouteName: 'Tab1',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
    }
  );
  
  export default createAppContainer(BottomNavigatorExample);
  