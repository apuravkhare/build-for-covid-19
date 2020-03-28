import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const categories = [
  { id: "groceries", display: "Groceries" },
  { id: "medicine",  display: "Prescription" },
  { id: "deliver", display: "Deliver an item" },
  { id: "other", display: "Other Pickup" }];

const listItemHeight = 100 / categories.length;

export default function CategoryScreen({navigation}) {
  return (
    <SafeAreaView >
      <FlatList style={styles.list}
        data={categories}
        renderItem={({ item }) => getListItem(item, navigation)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

function getListItem(item, navigation) {
  return (
    <TouchableOpacity style={styles.listItem} onPress = { (event) => {navigation.navigate('Profile', { item: item })} }>
      <Text style={styles.listItemText}>{item.display}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  list: {
    height: '100%',
  },
  listItem: {
    backgroundColor: '#7389ae',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  listItemText: {
    fontSize: 20,
    color: 'white',
  }
});