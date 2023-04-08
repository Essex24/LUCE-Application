import * as React from 'react';
import { Button, Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';  
import Animated from 'react-native-reanimated';

import './polyfills';
import LogoTitle from './components/Logo';
import HomeScreen from './screens/HomeScreen';
import ResourceScreen from './screens/Resource';
import SearchScreen from './screens/Search';
import BookScreen from './screens/Book';
import ArticleScreen from './screens/Article';
import AboutUsScreen from './screens/AboutUs';
import ContactUsScreen from './screens/ContactUs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Digital Resources" component={ResourceScreen}/>
    </Stack.Navigator>
  );
}

function DrawerStack() {
  return (
      <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
          headerStyle: {
            backgroundColor: '#2e598c',
            alignItems: 'center',
          },
          headerTintColor: '#fff',
          headerTitleAlign: "center",
        }}
      >
        <Drawer.Screen name="Home" component={StackScreen} options={{ headerTitle: (props) => <LogoTitle {...props} />, }}/>
        <Drawer.Screen name="About Us" component={AboutUsScreen} options={{ headerTitle: (props) => <LogoTitle {...props} />, }} />
        <Drawer.Screen name="Search" component={SearchScreen} options={{ headerTitle: (props) => <LogoTitle {...props} />, }} />
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} options={{ headerTitle: (props) => <LogoTitle {...props} />, }} />
      </Drawer.Navigator>
  );
}

function TabStack() {
  return (
      <Tab.Navigator screenOptions={{
           tabBarStyle: { 
             backgroundColor: '#2e598c' },
           tabBarActiveTintColor: '#0e2748',
           headerStyle: {
            backgroundColor: '#2e598c',
            alignItems: 'center',
           },
           headerTintColor: '#fff',
           headerTitleAlign: "center",
        }}>
        <Tab.Screen name="Home" component={DrawerStack} options={{headerShown: false, tabBarIcon:({tintColor})=>(
          <Icon name="ios-home" color={'white'} size={25}/>)}} />
        <Tab.Screen name="Search" component={SearchScreen} options={{headerTitle: (props) => <LogoTitle {...props} />, tabBarIcon:({tintColor})=>(
          <Icon name="search" color={'white'} size={25}/>)}} />
        <Tab.Screen name="Book" component={BookScreen} options={{headerTitle: (props) => <LogoTitle {...props} />, tabBarIcon:({tintColor})=>(
          <Icon name="book" color={'white'} size={25}/>)}} />
        <Tab.Screen name="Article" component={ArticleScreen} options={{headerTitle: (props) => <LogoTitle {...props} />, tabBarIcon:({tintColor})=>(
          <Icon name="newspaper" color={'white'} size={25}/>)}} />
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