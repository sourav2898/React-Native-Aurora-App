import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileNavbar = () => {
  return (
    <View style={styles.container}>
      <Text>
        {' '}
        <Icon name="rocket" size={30} color="#900" />{' '}
      </Text>
    </View>
  );
};

export default ProfileNavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#111',
    width: '100%',
    padding: 10,
  },
});
