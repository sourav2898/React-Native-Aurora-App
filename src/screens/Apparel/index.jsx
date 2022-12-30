import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const Apparel = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Text> Apparel </Text>
        <Image
          source={require('../../assets/images/home-active.png')}
          style={{
            width: 10,
            height: 10,
          }}
        />
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
export default Apparel;
