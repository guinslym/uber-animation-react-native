/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default class LoginScreen extends Component {

  static navigationOptions = {
      header: null
  }


  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/login_bg.jpg')}
          style={{ flex: 1 }}
          >
            <View style={{ flex: 1 }}>
              <Text>
                UBER
              </Text>
            </View>

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
