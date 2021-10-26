import React from "react";

import {createStackNavigator} from '@react-navigation/stack';

import Splash from "./Splash";
import Login from './Splash';
import Signup from './Splash';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name='splashScreen' component= {Splash}/>
        <RootStack.Screen name='Login' component= {Login}/>
        <RootStack.Screen name='Signup' component= {Signup}/>
    </RootStack.Navigator>
)

export default RootStackScreen;