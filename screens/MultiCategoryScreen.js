import React, { Component } from 'react';
import { ActivityIndicator, Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class MultiCategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      nameValue: '',
      onChangeNameText: (text) => { this.setState({ nameValue: text }) },
      contactValue: '',
      onChangeContactText: (text) => { this.setState({ contactValue: text }) },
      showActivityIndicator: false
    };
  }

  categories = [
    { id: "groceries", display: "Groceries" },
    { id: "medicine",  display: "Prescription" },
    { id: "deliver", display: "Deliver an item" },
    { id: "other", display: "Other Pickup" }];

    toggleAddCategory(item) {
    let cs = this.state.selected;
    if (cs.indexOf(item) < 0) {
      cs.push(item);
      this.setState({ selected: cs });
    } else {
      cs.splice(cs.indexOf(item), 1);
      this.setState({ selected: cs });
    }
  }

  getListItem(item) {
    return (
      <TouchableOpacity style={this.state.selected.indexOf(item) >= 0 ? this.styles.listItemSelected : this.styles.listItem} onPress = { (event) => {this.toggleAddCategory(item)} }>
        <Text style={this.styles.listItemText}>{ (this.state.selected.indexOf(item) >= 0 ? '✓' : '    ') + item.display}</Text>
      </TouchableOpacity>
    );
  }

  onConfirm() {
    this.setState({ showActivityIndicator: true });
    setTimeout(() => {
      this.props.navigation.navigate('Match', { items: this.state.selected, profile: { 'name': this.state.nameValue, 'contact': this.state.contactValue } });
    }, 2000)
  }

  render() {
    return (
      <View>
        <View style={this.styles.textBoxHolder}>
          <TextInput
            style={this.styles.textBox}
            onChangeText={text => this.state.onChangeNameText(text)}
            value={this.state.nameValue}
            placeholder="Your name"
          />
        </View>
        <View style={this.styles.textBoxHolder}>
          <TextInput
            style={this.styles.textBox}
            onChangeText={text => this.state.onChangeContactText(text)}
            value={this.state.contactValue}
            placeholder="Phone"
            autoCompleteType='tel'
            keyboardType='phone-pad'
          />
        </View>
        <SafeAreaView >
          <FlatList 
            data={this.categories}
            renderItem={({ item }) => this.getListItem(item)}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
        {this.renderConfirmOrActivity()}
      </View>
    );
  }

  renderConfirmOrActivity() {
    console.log(this.state);
    if (this.state.showActivityIndicator) {
      return (
        <View style={this.styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <View style={this.styles.buttonHolder}>
            <Button title="Confirm" onPress={ (event) => this.onConfirm() }></Button>
        </View>
      )
    }
  }

  styles = StyleSheet.create({
    list: {
      height: '100%',
    },
    listItem: {
      backgroundColor: '#7389ae',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    listItemSelected: {
      backgroundColor: '#8297a0',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    listItemText: {
      fontSize: 20,
      color: 'white',
    },
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
}
