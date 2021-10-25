import React from 'react';
import{StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, Ionicons,Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Account from '../screens/Account'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
         
        screenOptions={{

            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#fff',
                height: 70,
                

        } }}>
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options= {{
                tabBarIcon: ({focused, tintColor}) => (
                    <View>
                        <MaterialIcons name="home" size={24} color="#4892d4" />
                    </View>
                        
                    
                ),
            }} />
            <Tab.Screen name="Search" component={Cart} options= {{
                tabBarIcon: ({focused, tintColor}) => (
                    <View>
                        <Feather name="search" size={24} color="#4892d4" />
                    </View>
                ),
            }} />
            <Tab.Screen name="Cart" component={Cart} options= {{
                tabBarIcon: ({focused}) => (
                    
                        <Ionicons name="cart" size={24} color="#4892d4" />
                    
                ),
            }} />
            <Tab.Screen name="Account" component={Account} options= {{
                tabBarIcon: ({focused, tintColor}) => (
                    <View>
                        <MaterialCommunityIcons name="account" size={24} color="#4892d4" />
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );

}


export default Tabs;