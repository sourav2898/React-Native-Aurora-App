import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BobUsers from '../../components/bob-users';
import Loading from '../../components/loading';
import useBobsBurger from '../../hooks/useBobsBurger';
import AllUsers from './screens/all-users';
import UserDetails from './screens/user-details';

const Home = ({navigation}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="AllUsers">
      <Stack.Screen
        name="AllUsers"
        component={AllUsers}
        options={{headerShown: false}}
      />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
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
export default Home;
