import React from 'react';

import {createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import Login from './Login';
import SignUp from './Signup';


const RootStack = createStackNavigator();


function RootStackScreen(){
    return (
        <RootStack.Navigator headerMode = 'none'>
        <RootStack.Screen name="SplashScreen" component = {SplashScreen}/>
        <RootStack.Screen name="Login" component = {Login}/>
        <RootStack.Screen name="Signup" component = {SignUp}/>
        
    </RootStack.Navigator>
    );
}

export default RootStackScreen;