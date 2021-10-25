import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home'
import Cart from './screens/Cart'
import Tabs from './navigation/tabs'


const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false 
    }}
    initialRouteName = {"Home"}>
    
    <Stack.Screen name="Home" component={Tabs} />
    <Stack.Screen name="Cart" component={Cart}/>
    </Stack.Navigator>
    
    </NavigationContainer>
  );
}

export default App;