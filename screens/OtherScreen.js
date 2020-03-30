import React, { Component } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function({route, navigation}) {
  const { item } = route.params;
  const { profile } = route.params;

  const [descValue, onChangeDescText] = React.useState('');
  const [address1Value, onChangeAddress1Text] = React.useState('');
  const [address2Value, onChangeAddress2Text] = React.useState('');
  const [zipValue, onChangeZipText] = React.useState('');

  function createPickup() {
    return {
      'desc': descValue,
      'address1': address1Value,
      'address2': address2Value,
      'zip': zipValue
    };
  }

  return (
    <View>
      <View style={styles.textBoxHolder}>
        <TextInput
          style={styles.textBox}
          onChangeText={text => onChangeDescText(text)}
          value={descValue}
          placeholder="Item description"
        />
      </View>
      <View style={styles.textBoxHolder}>
        <TextInput
          style={styles.textBox}
          onChangeText={text => onChangeAddress1Text(text)}
          value={address1Value}
          placeholder="Pickup Street Address"
          autoCompleteType='street-address'
        />
      </View>
      <View style={styles.textBoxHolder}>
        <TextInput
          style={styles.textBox}
          onChangeText={text => onChangeAddress2Text(text)}
          value={address2Value}
          placeholder="Apt/Unit"
        />
      </View>
      <View style={styles.textBoxHolder}>
        <TextInput
          style={styles.textBox}
          onChangeText={text => onChangeZipText(text)}
          value={zipValue}
          placeholder="Zip Code"
          autoCompleteType='postal-code'
          keyboardType='numeric'
        />
      </View>
      <View style={styles.buttonHolder}>
          <Button title="Proceed" onPress={ (event) => {navigation.navigate('Confirmation', { item: item, pickup: createPickup(), profile: profile })} }></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBoxHolder: {
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#F9F9F9',
  },
  textBox: {
    height: 50,
    borderColor: 'gray',
    fontSize: 16,
    marginLeft: 5,
    textAlign: 'left'
  },
  buttonHolder: {
    color:"#7389ae",
    padding: 16,
  },
});