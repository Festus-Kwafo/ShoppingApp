import React from 'react';
import{StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons, Ionicons,Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Account from '../screens/Account'

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center'
    }}
    onPress={onPress}>
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#4892d4',
            ...styles.shadow
        }}>
        {children}

        </View>
    </TouchableOpacity>
);
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
                ...styles.shadow
            

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
            <Tab.Screen name="Search" component={Cart} 
            options= {{
                tabBarIcon: ({focused, tintColor}) => (
                    <View>
                        <Feather name="search" size={24} color="#4892d4" />
                    </View>
                ),
            }} />
            <Tab.Screen name="Post" component={Cart} 
            options= {{
                tabBarIcon: ({focused, tintColor}) => (
                    <View>
                        <MaterialIcons name="keyboard-voice" size={24} color="#fff" />
                    </View>
                ),
                tabBarButton: (props) => (
                <CustomTabBarButton {...props} />)  
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
const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7a7574",
        shadowOffset: {
            width: 0,
            height: 10,
        }, 
        shadowOpacity: 0.25,
        shadowRadius: 3.25,
        elevation: 3
    }
})

export default Tabs;