import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const BobUsers = ({name, occupation, firstEpisode}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://bobsburgers-api.herokuapp.com/images/characters/1.jpg',
          }}
        />
      </View>
      <Text style={styles.textHeading} > Name: {name} </Text>
      <Text style={styles.textDesc} > Occupation: {occupation} </Text>
      <Text style={styles.textDesc} > First Episode: {firstEpisode} </Text>

    </View>
  );
};

export default BobUsers;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    height: 250,
    margin: 10,
    padding: 5
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
    fontWeight: 'bold'
  },
  textDesc:{
    color: "#111",
    padding: 2
  }
});
