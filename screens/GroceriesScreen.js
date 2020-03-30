import React, { Component } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { render } from 'react-dom';

export default class GroceriesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { groceries: [], text: '' };
  }

  deleteItem = index => {
    let g = this.state.groceries;
    g.splice(index, 1);
    this.setState({ groceries: g });
  }

  addItem = text => {
    let g = this.state.groceries;
    g.push(this.state.text);
    this.setState({ groceries: g, text: "" });
  }

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.groceries}
          renderItem={({item, index}) =>
            <View>
              <View style={this.styles.listItemCont}>
                <Text style={this.styles.listItem}>{item}</Text>
                <Button title="X" onPress={() => this.deleteItem(index)} />
              </View>
              <View style={this.styles.hr} />
            </View>
          }
          keyExtractor={item => item}
        />
        <View style={this.styles.textBoxHolder}>
          <TextInput
            style={this.styles.textBox}
            onChangeText={this.changeTextHandler}
            onSubmitEditing={this.addItem}
            value={this.state.text}
            placeholder="Item name"
          />
        </View>
        <View style={this.styles.buttonHolder}>
          <Button title="Proceed" onPress={ (event) => {this.props.navigation.navigate('Confirmation', { item: this.props.route.params.item, groceries: this.state.groceries, profile: this.props.route.params.profile })} }></Button>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
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
}

