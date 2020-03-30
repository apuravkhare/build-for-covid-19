import React, { Component } from 'react';
import { ActivityIndicator, Button, FlatList, Linking, Platform, Text, View, StyleSheet } from 'react-native';

const matched = {
  'name': 'Rebecca',
  'contact': '000000000',
  'item': {
    id: "groceries",
    display: "Groceries"
  },
  'groceries': [ "Milk", "Bread", "Eggs", "Olive Oil" ]
};

export default function MatchScreen({route, navigation}) {
  
  
  // using item/items to determine which workflow this is coming from - not elegant, but works.
  const { item } = route.params;
  const { items } = route.params;

  return (
    <View>
      {getMatchedScreen(matched, item, items)}
    </View>
  )
}

function dialCall() {
  let phoneNumber = matched.contact;
  if (Platform.OS === 'android') {
    phoneNumber = 'tel:${' + phoneNumber + '}';
  }
  else {
    phoneNumber = 'telprompt:${' + phoneNumber + '}';
  }

  Linking.openURL(phoneNumber);
};

function getMatchedScreen(matched, item, items) {
  if (item) {
    // "i require assistance" flow
    return (
      <View>
        <Text style={{fontSize: 20}}>You will be helped by {matched.name}</Text>
        <View style={styles.buttonHolder}>
          <Button title="Contact" onPress = {dialCall}></Button>
        </View>
      </View>
    );
  } else if (items) {
    // "i can help" flow
    return (
      <View>
        <Text style={{fontSize: 20}}>You will be helping {matched.name} with {matched.item.display}</Text>
        {getCategoryDisplay(matched.item, matched.image, matched.delivery, matched.groceries, matched.pickup)}
        <View style={styles.buttonHolder}>
          <Button title="Contact" onPress = {dialCall}></Button>
        </View>
      </View>
    );
  }
}

function getCategoryDisplay(item, image, delivery, groceries, pickup) {
  switch(item.id) {
    case 'groceries':
      return (
        <View>
          <Text style={{fontSize: 20}}>Groceries:</Text>
          <FlatList
          data={groceries}
          renderItem={({item, index}) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>{item}</Text>
              </View>
              <View style={styles.hr} />
            </View>
            }
          keyExtractor={item => item}
          />
        </View>
      );
    case 'medicine':
      return (
        <Image
        style={styles.image}
        source={{
          uri: image.uri,
        }}
      />
      );
    case 'deliver':
      return (
        <View>
          <Text style={{fontSize: 25}}>Item details:</Text>
          <Text style={styles.confirmFont}>{delivery.desc}</Text>
          <Text style={styles.confirmFont}>{delivery.weight}</Text>
          <Text style={styles.confirmFont}>{delivery.address1}</Text>
          <Text style={styles.confirmFont}>{delivery.address2}</Text>
          <Text style={styles.confirmFont}>{delivery.zip}</Text>
        </View>
      );
    case 'other':
      return (
        <View>
          <Text style={{fontSize: 25}}>Pickup details:</Text>
          <Text style={styles.confirmFont}>{pickup.desc}</Text>
          <Text style={styles.confirmFont}>{pickup.address1}</Text>
          <Text style={styles.confirmFont}>{pickup.address2}</Text>
          <Text style={styles.confirmFont}>{pickup.zip}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  image: {
    height: '50%'
  },
  buttonHolder: {
    color:"#7389ae",
    padding: 16,
  },
  confirmFont: {
    fontSize: 20
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
});