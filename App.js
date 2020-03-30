import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryScreen from './screens/CategoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import CameraScreen from './screens/CameraScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';
import MatchScreen from './screens/MatchScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import GroceriesScreen from './screens/GroceriesScreen';
import OtherScreen from './screens/OtherScreen';
import MultiCategoryScreen from './screens/MultiCategoryScreen';

const Stack = createStackNavigator();

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Category" component={CategoryScreen} options={{title:"I need help with..."}} />
          <Stack.Screen name="MultiCategory" component={MultiCategoryScreen} options={{title:"I can help with..."}} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{title:"A few details"}} />
          <Stack.Screen name="Camera" component={CameraScreen} options={{headerShown: false}} />
          <Stack.Screen name="Deilvery" component={DeliveryScreen} options={{title:"Item details"}} />
          <Stack.Screen name="Groceries" component={GroceriesScreen} options={{title:"Grocery items"}} />
          <Stack.Screen name="Other" component={OtherScreen} options={{title:"Other pickup"}} />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{title:"Confirmation"}} />
          <Stack.Screen name="Match" component={MatchScreen} options={{title:"Matched"}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
