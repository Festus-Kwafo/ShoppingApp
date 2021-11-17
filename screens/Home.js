import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Dimensions, Image, ImageBackground } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Counches from '../commons/Couches';

const width = Dimensions.get('screen').width / 1.8 - 30;


const Home = () => {
  return (
    
    
    <View style= {{
      
      backgroundColor: "#fafbfc",
      flex: 1,
      paddingTop: 60,
      paddingHorizontal: 20,
    }} ><StatusBar backgroundColor="#fafbfc" barStyle= "light-content" />
    
     
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
    <Ionicons name="menu" size={24} color="#143a5c" />
     <Ionicons name="cart" size={24} color="#143a5c" />

    </View>
    
    <View style={{
      paddingTop: 40,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center"
      
    }}>
      <Text style={{
        fontWeight: "bold",
        fontSize: 25,
        color: "#143a5c" 
      }}>New arrival</Text>
      <AntDesign name="arrowright" size={24} color="#143a5c"/>
    </View>
    <ScrollView
    horizontal 
    showsHorizontalScrollIndicator={false}>
    <Counches
      
    />
    </ScrollView>
    <View style={{
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center"
      
    }}>
      <Text style={{
        fontWeight: "bold",
        fontSize: 25,
        color: "#143a5c" 
      }}>Collections</Text>
      <AntDesign name="arrowright" size={24} color="#143a5c"/>
    </View>
    <View style={{
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      }}>
    <View>
      <Text></Text>
    </View>
      <Image source={require('../assets/collections.png')} resizeMode='contain' style={{
        height: 200,
        width:  200
      }}/>

      
    </View>
    </View>
    
  );


}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 350,
      backgroundColor: "white",
      width,
      marginHorizontal: 10,
      borderRadius: 10,
      marginBottom: 10,
      padding: 15,
  },

  shadow: {
    shadowColor: "#143a5c",
    shadowOffset: {
        width: 0,
        height: 10,
    }, 
    shadowOpacity: 0.5,
    shadowOpacity: 3.5,
    elevation: 3
  },
  buttons: {
    alignSelf: "baseline",
        backgroundColor: "#4892d4",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#143a5c",
      shadowOffset: {
        width: 0,
        height: 10,
        }, 
      shadowOpacity: 3.25,
      shadowRadius: 3.5,
      elevation: 3
        

  }
});

