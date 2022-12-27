import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BobUsers from '../../components/bob-users';
import useBobsBurger from '../../hooks/useBobsBurger';

const Home = ({navigation}) => {

  const {loading, theBobsBurgers} = useBobsBurger()

  console.log(theBobsBurgers);
  console.log(loading);
  return (
    <>
      <ScrollView>
        <BobUsers />
      </ScrollView>
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
export default Home;
