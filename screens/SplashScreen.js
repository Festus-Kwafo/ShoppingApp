import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
    return(
        <View style ={styles.container}>
        <StatusBar backgroundColor="#143a5c" barStyle= "light-content" />
            <View style={styles.header}>
                <Animatable.Image
                animation = 'bounceIn'
                source = {require('../assets/logo.png')}
                style = {styles.logo}
                resizeMode = "contain"/>
            </View>
            <Animatable.View  animation= 'fadeInUpBig' style={styles.footer}>
                <Text style={styles.title}>Stay connected with Us</Text>
                <Text style={styles.text}>Sign in your account </Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View
                    style={styles.signIn}>
                    <Text style={styles.textSign}>Get Started</Text>
                    <Ionicons name="arrow-forward" size={20} color="#fff" /> 
                    </View>
                </TouchableOpacity>

            </View>
                </Animatable.View>
                
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#143a5c',
  },
  header: {
      flex: 2,
      justifyContent: "center",
      alignItems: 'center'
  }, 
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  }, 
  logo: {
    width: height_logo,
    height: height_logo
  }, 
  title: {
    color: '#143a5c',
    fontSize: 30,
    fontWeight: 'bold'
},
    text: {
        color: '#4892d4',
        marginTop:5
},
signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
},
textSign: {
    color: 'white',
    fontWeight: 'bold'
},
button: {
    alignItems: 'flex-end',
    marginTop: 30,
    
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
},
});
