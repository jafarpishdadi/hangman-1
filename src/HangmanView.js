import React, { Proptypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Gallows from './Gallows';
import LetterToWord from './LetterToWord';
import Keyboard from './Keyboard';
import Button from './Button';

const HangmanView = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Button text='Home' handlePress={props.alertHome} style={styles.topButtons}/>
        <Button text='Get a Hint' handlePress={props.showModalAd} style={styles.topButtons}/>
      </View>
      <Gallows {...props}/>
      <LetterToWord {...props}/>
      <Keyboard {...props}/>
    </View>
  )
};

export default HangmanView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  topButtons: {
    height: 45,
    width: 125,
  },
});
