import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useRandomQuotes from '../../hooks/useRandomQuotes';

const Notifications = ({navigation}) => {
  const {quote} = useRandomQuotes();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}> {quote} </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  text: {
    color: '#111',
    fontSize: 15,
    textAlign: 'center',
  },
});
export default Notifications;
