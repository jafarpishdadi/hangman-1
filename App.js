import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hangman from "./src/Hangman";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Hangman />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4183D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
