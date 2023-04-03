import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, createAppContainer } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { StatusBar } from 'expo-status-bar';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
      <View>
      <Button
        title="Open URL with the system browser"
        onPress={() => Linking.openURL('https://www.lincolnu.edu/_images/lu_map_updated22-1.pdf')}
      />
      <Button
        title="Open URL with an in-app browser"
        onPress={() => WebBrowser.openBrowserAsync('https://www.lincolnu.edu/_images/lu_map_updated22-1.pdf')}
      />
    </View>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <StatusBar style="auto" />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function BookScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Book Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function ArticleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#0C2340',
            alignItems: 'center',
          },
          headerTintColor: '#fff',
        }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#0C2340',
            alignItems: 'center',
          },
          headerTintColor: '#fff',
        }}>
      <SearchStack.Screen name="Search" component={SearchScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
      <SearchStack.Screen name="Details" component={DetailsScreen} />
    </SearchStack.Navigator>
  );
}

const BookStack = createNativeStackNavigator();

function BookStackScreen() {
  return (
    <BookStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#0C2340',
            alignItems: 'center',
          },
          headerTintColor: '#fff',
        }}>
      <BookStack.Screen name="Book" component={BookScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
      <SearchStack.Screen name="Details" component={DetailsScreen} />
    </BookStack.Navigator>
  );
}

const ArticleStack = createNativeStackNavigator();

function ArticleStackScreen() {
  return (
    <ArticleStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#0C2340',
            alignItems: 'center',
          },
          headerTintColor: '#fff',
        }}>
      <ArticleStack.Screen name="Article" component={ArticleScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
      <SearchStack.Screen name="Details" component={DetailsScreen} />
    </ArticleStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
           tabBarStyle: { 
             backgroundColor: '#0C2340' },
        }}
        >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false, tabBarIcon:({tintColor})=>(
          <Icon name="ios-home" color={'white'} size={25}/>)}} />
        <Tab.Screen name="Search" component={SearchStackScreen} options={{headerShown: false, tabBarIcon:({tintColor})=>(
          <Icon name="search" color={'white'} size={25}/>)}} />
        <Tab.Screen name="Book" component={BookStackScreen} options={{headerShown: false, tabBarIcon:({tintColor})=>(
          <Icon name="book" color={'white'} size={25}/>)}} />
        <Tab.Screen name="Article" component={ArticleStackScreen} options={{showLabel: false, headerShown: false, tabBarIcon:({tintColor})=>(
          <Icon name="newspaper" color={'white'} size={25}/>)}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function LogoTitle() {
  return (
    <Image
      style={{ width:120, height: 70 }}
      source={require('./assets/lu.png')}
    />
  );
}