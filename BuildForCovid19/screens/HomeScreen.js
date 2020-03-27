import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <TouchableOpacity style={styles.homeItemAssistance} onPress = { (event) => {navigation.navigate('Category')} }>
        <View>
          <Text style={styles.textAssistance}>I require assistance</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.homeItemHelp}>
        <Text style={styles.textHelp}>I can help</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeItemAssistance: {
    textAlign: 'center',
    alignItems: 'center',
    height: '50%',
    backgroundColor: '#7389ae'
  },
  homeItemHelp: {
    textAlign: 'center',
    alignItems: 'center',
    height: '50%',
    backgroundColor: '#e1e5f2'
  },
  textAssistance: {
    fontSize: 40,
    marginTop: '50%',
    color: 'white'
  },
  textHelp: {
    fontSize: 40,
    marginTop: '50%',
    color: 'grey'
  },
});