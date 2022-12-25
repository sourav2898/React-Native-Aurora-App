import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {auth} from '../../../firebase';

const Settings = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text> Profile </Text>
        <Button onPress={() => auth.signOut()} title="Log out" />
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
    backgroundColor: '#111',
  },
});
export default Settings;
