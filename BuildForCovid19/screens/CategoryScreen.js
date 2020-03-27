import React, { Component } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const categories = ["Groceries", "Medicine", "Other Pickup"]
const listItemHeight = 100 / categories.length;

export default function CategoryScreen() {
  return (
    <SafeAreaView >
      <FlatList style={styles.list}
        data={categories}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    height: listItemHeight + '%'
  },
  listItem: {
    backgroundColor: '#7389ae',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 20,
    color: 'white',
  },
});