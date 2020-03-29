import React, { Component } from 'react';
import { ActivityIndicator, Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';


// export default function ConfirmationScreen({route, navigation}) {
export default class ConfirmationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { showActivityIndicator: false };
  }
  
  render() {
    const { image } = this.props.route.params;
    const { item } = this.props.route.params;
    const { profile } = this.props.route.params;
  
    console.log(image);
    return(
      <View>
        <View style={{height: '95%'}}>
          {this.getProfileDisplay(profile)}
          {this.getCategoryDisplay(item, image)}
        </View>
        {this.renderConfirmOrActivity()}
      </View>
    );
  }

  onConfirm() {
    this.setState({ showActivityIndicator: true });
    setTimeout(() => {
      this.props.navigation.navigate('Match');
    }, 2000)
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
        <View style={{marginTop: 'auto'}}>
          <Button title="Confirm Request" onPress={ (event) => { this.onConfirm() } } ></Button>
        </View>
      )
    }
  }

  getProfileDisplay(profile) {
    return (
      <View >
        <Text style={this.styles.confirmFont}>{profile.name}</Text>
        <Text style={this.styles.confirmFont}>{profile.address1}</Text>
        <Text style={this.styles.confirmFont}>{profile.address2}</Text>
        <Text style={this.styles.confirmFont}>{profile.zip}</Text>
      </View>
    )
  }

  getCategoryDisplay(item, image) {
    switch(item.id) {
      case 'groceries':
        return (
          <View></View>
        );
      case 'medicine':
        return (
          <Image
          style={this.styles.image}
          source={{
            uri: image.uri,
          }}
        />
        );
      case 'deliver':
        return (
          <View></View>
        );
      case 'other':
        return (
          <View></View>
        );
    }
  }

  styles = StyleSheet.create({
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
    }
  });
}
