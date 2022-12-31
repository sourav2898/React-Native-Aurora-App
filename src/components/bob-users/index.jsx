import React from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';

const BobUsers = ({
  name,
  occupation,
  firstEpisode,
  url,
  gender,
  navigation,
  id,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        borderColor: `${gender ? 'pink' : 'blue'}`,
      }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
      </View>
      <Text style={styles.textHeading}> Name: {name || 'Anonymous'} </Text>
      <Text style={styles.textDesc}> Occupation: {occupation || 'N/A'} </Text>
      <Text style={styles.textDesc}>
        {' '}
        First Episode: {firstEpisode || 'N/A'}{' '}
      </Text>
      <Button
        title="View Details"
        onPress={() => {
          navigation.navigate('UserDetails', {id});
        }}
      />
    </View>
  );
};

export default BobUsers;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    height: 'auto',
    margin: 10,
    padding: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 150,
    height: 150,
  },
  textHeading: {
    padding: 2,
    color: '#111',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textDesc: {
    color: '#111',
    padding: 2,
  },
});
