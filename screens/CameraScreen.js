import React, { Component, useState, useEffect } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';



export default function CameraScreen({route, navigation}) {
  const { item } = route.params;
  const { profile } = route.params;
  var cameraRef;
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  async function takePicture() {
    if (cameraRef) {
      const data = await cameraRef.takePictureAsync();
      // console.log(data);
      navigation.navigate('Confirmation', { item: item, image: data, profile: profile })
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>No access to camera</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={(ref) => { cameraRef = ref }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            {/* <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text> */}
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={{ marginHorizontal: 10, marginVertical: 10, backgroundColor: '#000000'}}>
        <Button title="Add prescription"  onPress={ (event) => {takePicture()} }></Button>
      </View>
    </View>
  );
}

