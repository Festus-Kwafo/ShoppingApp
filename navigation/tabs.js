import React from 'react';
import{StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Account from '../screens/Account'


const Tab = createBottomTabNavigator();


const Tabs = () => {
    return(
        <Tab.Navigator 
        screenOptions={{
            showLabel: false, 
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#5eb2bf',
                height: 90,
                borderRadius: 15,

        } }}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Cart" component={Cart}/>
            <Tab.Screen name="Account" component={Account}/>
        </Tab.Navigator>
    );

}


export default Tabs;