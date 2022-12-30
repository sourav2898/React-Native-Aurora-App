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
import ProfileNavbar from '../../components/navbar';
import useCurrentUser from '../../hooks/useCurrentUser';

const Settings = ({navigation}) => {
  const {currentUser, loading} = useCurrentUser();

  return (
    <>
      <View style={styles.container}>
        <Text style={{color: 'black', fontSize: 25, padding: 10}}>
          {' '}
          {currentUser}{' '}
        </Text>
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
  },
});
export default Settings;
