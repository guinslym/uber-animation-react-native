import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'
import LoginScreen from './Screens/LoginScreen'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen/>
      </View>
    );
  }
}

const AppStackNavigator = StackNavigator({
  LoginScreen: {screen:LoginScreen}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
