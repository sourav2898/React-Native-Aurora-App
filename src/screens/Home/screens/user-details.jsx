import React, {useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {useBobsBurgerById} from '../../../hooks/useBobsBurger';

const UserDetails = ({route, navigation}) => {
  const {loading, theBobsBurgersById} = useBobsBurgerById(route.id);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.text}> Loading.. </Text>
      ) : (
        <>
          <Image
            source={{uri: theBobsBurgersById?.image}}
            style={styles.image}
          />
          <Text style={styles.text}> Name: {theBobsBurgersById?.name} </Text>
          <Text style={styles.text}>
            {' '}
            Gender: {theBobsBurgersById?.gender}{' '}
          </Text>
          <Text style={styles.text}>
            {' '}
            Hair Color: {theBobsBurgersById?.hairColor}{' '}
          </Text>
          <Text style={styles.text}>
            {' '}
            Occupation: {theBobsBurgersById?.occupation}{' '}
          </Text>
          <Text style={styles.text}>
            {' '}
            First Episode: {theBobsBurgersById?.firstEpisode || 'N/A'}{' '}
          </Text>
          <Text style={styles.text}>
            {' '}
            Voiced By: {theBobsBurgersById?.voicedBy || 'N/A'}{' '}
          </Text>
        </>
      )}
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    padding: 2,
  },
});
