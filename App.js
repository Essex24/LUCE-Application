import * as React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  

import LogoTitle from './components/Logo';
import HomeScreen from './screens/HomeScreen';
import ResourceScreen from './screens/Resource';
import SearchScreen from './screens/Search';
import AboutUsScreen from './screens/AboutUs';
import ContactUsScreen from './screens/ContactUs';
import RandomScreen from './screens/Random';
import LoginScreen from './screens/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={LoginScreen}/>
      <Stack.Screen name="Digital Resources" component={ResourceScreen}/>
    </Stack.Navigator>
  );
}


function TabStack() {
  return (
      <Tab.Navigator initialRouteName="Resources" screenOptions={{
           tabBarStyle: { 
             backgroundColor: '#2e598c' },
           tabBarActiveTintColor: '#0e2748',
           headerStyle: {
            backgroundColor: '#2e598c',
           },
           headerTintColor: '#fff',
           headerTitleAlign: "center",
        }}>
        <Tab.Screen name="About Us" component={AboutUsScreen} 
        options={{
          headerTitle: (props) => <LogoTitle {...props} />, 
          tabBarIcon:({tintColor})=>(<Icon name="ios-home" color={'white'} size={25}/>)
        }}/>
        <Tab.Screen name="Search" component={SearchScreen} 
        options={{headerTitle: (props) => <LogoTitle {...props} />, 
        tabBarIcon:({tintColor})=>(
          <Icon name="search" color={'white'} size={25}/>)
        }} />
        <Tab.Screen name="Show Me How!" component={RandomScreen} options={{
          headerTitle: (props) => <LogoTitle {...props} />, 
          tabBarIconStyle: { 
            display:"none" 
          },
          }}/>
        <Tab.Screen name="Resources" component={StackScreen} 
        options={{
          headerTitle: (props) => <LogoTitle {...props} />, 
          tabBarIcon:({tintColor})=>(<Icon name="book" color={'white'} size={25}/>),
        }}/>
        <Tab.Screen name="Contact Us" component={ContactUsScreen} 
        options={{
          headerTitle: (props) => <LogoTitle {...props} />, 
          tabBarIcon:({tintColor})=>(<Icon name="newspaper" color={'white'} size={25}/>)
        }} />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabStack/>
    </NavigationContainer>
  );
}