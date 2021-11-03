import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Platform, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Ionicons, AntDesign, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const Signup = ({navigation}) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true
  });

  const textInputChange = (val) =>{
    if (val.length != 0 ){
      setData({
        ...data,
        email:val,
        check_textInputChange:true
      });
    } else {
      setData({
        ...data,
        email:val,
        check_textInputChange:false
      });
    }
  } 
  
  const handlePasswordChange =(val) => {
    setData({
      ...data,
      password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data, 
      secureTextEntry: !data.secureTextEntry 
    });
  }

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#143a5c" barStyle= "light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Create an Account </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>
        Fullname
        </Text>
        <View style={styles.action}>
        <AntDesign name="user" size={20} color="#143a5c" />
        <TextInput 
            placeholder= "Your Fullname" 
            style={styles.textInput} 
            autoCapitalize='none' 
            onChangeText= {(val) => textInputChange(val)} />
        {data.check_textInputChange ? 
        <Animatable.View
          animation = 'bounceIn'>
        <Feather name="check-circle" size={20} color="#143a5c" />
        </Animatable.View>
        
        : null}
        </View>

        <Text style={[styles.text_footer, {marginTop: 20}]}>
        Email
        </Text>
        <View style={styles.action}>
        <MaterialIcons name="email" size={20} color="#143a5c" />
        
        <TextInput 
            placeholder= "Your Email" 
            style={styles.textInput} 
            autoCapitalize='none' 
            onChangeText= {(val) => textInputChange(val)} />
        {data.check_textInputChange ? 
        <Animatable.View
          animation = 'bounceIn'>
        <Feather name="check-circle" size={20} color="#143a5c" />
        </Animatable.View>
        
        : null}
        </View>

        

        <Text style={[styles.text_footer, {marginTop: 20}]}>
        Password
        </Text>
        <View style={styles.action}>
        <Feather name="lock" size={20} color="#143a5c" />
        <TextInput 
            placeholder= "Your Password" 
            secureTextEntry={data.secureTextEntry ? true : false} 
            style={styles.textInput} 
            autoCapitalize='none' 
            onChangeText= {(val) => handlePasswordChange(val)}
          
        />
        <TouchableOpacity onPress = {updateSecureTextEntry}>
        {data.secureTextEntry ? <Feather name="eye-off" size={20} color="#143a5c" />
        : <Feather name="eye" size={20} color="#143a5c" />}
        

        </TouchableOpacity>

       </View>

       <Text style={[styles.text_footer, {marginTop: 20}]}>
        Confirm Password
        </Text>
        <View style={styles.action}>
        <Feather name="lock" size={20} color="#143a5c" />
        <TextInput 
            placeholder= "Your Password" 
            secureTextEntry={data.secureTextEntry ? true : false} 
            style={styles.textInput} 
            autoCapitalize='none' 
            onChangeText= {(val) => handlePasswordChange(val)}
          
        />
        <TouchableOpacity onPress = {updateSecureTextEntry}>
        {data.secureTextEntry ? <Feather name="eye-off" size={20} color="#143a5c" />
        : <Feather name="eye" size={20} color="#143a5c" />}
        </TouchableOpacity>

       </View>

        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
        <View style={[styles.button, {marginTop: 20}]}>
          <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <View style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Text>Have an Account? <Text style={{
            color: "#143a5c",
            margin: 5,
            
          }} onPress= {() => navigation.navigate('Login')}>Login Here</Text></Text>
        </View>
        
      </View>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#143a5c'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#143a5c',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
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
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});