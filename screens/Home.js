import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style= {{
      backgroundColor: "#ebedf0",
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 20,
    }} >
     
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
    <Ionicons name="menu" size={24} color="#143a5c" />
     <Ionicons name="cart" size={24} color="#143a5c" />

    </View>
    <View style={{
      paddingTop: 50,
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
    <View style={{
      justifyContent: "space-between",

      paddingTop: 20,
      flexDirection: "row"
    }}>
      <View style={{
        flex: 1,
        height: 300,
        
        backgroundColor: "red",
        paddingRight: 20,
      }}>
      
      </View>
      <View style={{
        flex: 2,
        
        height: 300,
        backgroundColor: "blue"
      }}>
      
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
