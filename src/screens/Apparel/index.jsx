import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import useDrinks from '../../hooks/useDrinks';

const Apparel = ({navigation}) => {
  const {drinks, loading} = useDrinks();
  return (
    <>
      {loading ? (
        <View style={styles.loaderContainer}>
          <Text style={styles.loadingText}> Loading.... </Text>
        </View>
      ) : (
        <ScrollView>
          {drinks?.map(drink => {
            return (
              <View key={drink?.id} style={styles.container}>
                <Text style={styles.headingText}> {drink?.strDrink} </Text>
                <Image
                  source={{uri: drink?.strDrinkThumb}}
                  style={styles.image}
                />
                <Text style={styles.text}> {drink?.strCategory} </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  <Text style={styles.badgeText}> {drink?.strIBA} </Text>
                  <Text style={styles.badgeText}> {drink?.strAlcoholic} </Text>
                  <Text style={styles.badgeText}> {drink?.strGlass} </Text>
                </View>
                <Text style={styles.text}> {drink?.strInstructions} </Text>
              </View>
            );
          })}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  loaderContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    margin: 5,
    borderRadius: 10,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#111',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  headingText: {
    fontSize: 25,
    color: '#333',
    textAlign: 'center',
  },
  badgeText: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 5,
    borderRadius: 10,
    margin: 2,
  },
});
export default Apparel;
