import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Tabs from  './navigation/tabs';
import RootStackScreen from './screens/RootStack';



const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
    <RootStackScreen/>

    {/*<Tabs/>*/}    
    </NavigationContainer>
  );
}

export default App;