import React from 'react';
import { StyleSheet, Text, View, Platform, Dimensions, Image, ImageBackground } from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width / 1.8 - 30;


const Home = () => {
  return (
    
    <View style= {{
      backgroundColor: "#fafbfc",
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
    <View style={{
      paddingTop: 50,
      
      flexDirection: 'row'
    }}>
    <View style= {styles.card}>
      <Image style={{
        width: 160,
        height: 220,
        marginTop: -60,
        borderRadius:10}} source={require('../assets/pngwing.com.png')} />
      <TouchableOpacity style={styles.buttons}>
          <Text style={{
            color: '#fff',
            fontWeight: "bold"
          }}>NEW</Text>
      </TouchableOpacity>
      <Text style={{
        paddingTop: 20,
        color: '#143a5c',
        fontWeight: 'bold',
        fontSize: 15 
        }}>Hallingdal Chair</Text>
      <View style= {{
        paddingTop: 2,
        flexDirection: 'row'
      }}>
      <Entypo name="star" size={12} color="#e3d322" />
      <Entypo name="star" size={12} color="#e3d322" />
      <Entypo name="star" size={12} color="#e3d322" />
      <Entypo name="star" size={12} color="#e3d322" />
      <Entypo name="star" size={12} color="#e3d322" />

      </View>
      <Text style={{
        paddingTop: 20,
        color: '#143a5c',
        fontSize: 20,
        fontWeight: 'bold'
      }}>Hay
      </Text>
      <Text style={{
        paddingTop: 2,
        color: '#c9c9c3',
        }}>$400
        </Text>

    </View> 
    <View style= {styles.card}>
    <Image style={{
        width: 160,
        height: 220,
        marginTop: -60,
        borderRadius:10}} source={require('../assets/drawer.png')} />
      <TouchableOpacity style={styles.buttons}>
          <Text style={{
            color: '#fff',
            fontWeight: "bold"
          }}>NEW</Text>
      </TouchableOpacity>
      <Text style={{
        paddingTop: 20,
        color: '#143a5c',
        fontWeight: 'bold',
        fontSize: 15 
        }}>Drawer Table</Text>
      <View style= {{
        paddingTop: 2,
        flexDirection: 'row'
      }}>
      <Entypo name="star" size={12} color="#e3d322" />
      <Entypo name="star" size={12} color="#e3d322" />
      <Entypo name="star" size={12} color="#e3d322" />
      <Entypo name="star" size={12} color="#e3d322" />
      <Entypo name="star" size={12} color="#e3d322" />

      </View>
      <Text style={{
        paddingTop: 20,
        color: '#143a5c',
        fontSize: 20,
        fontWeight: 'bold'
      }}>Ikea
      </Text>
      <Text style={{
        paddingTop: 2,
        color: '#c9c9c3',
        }}>$560
        </Text>
    </View>
    </View>
    
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

