import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BobUsers from '../../../components/bob-users';
import useBobsBurger from '../../../hooks/useBobsBurger';

const AllUsers = ({navigation}) => {
  const {loading, theBobsBurgers} = useBobsBurger();

  return (
    <>
      <ScrollView>
        {loading ? (
          <View>
            <Text style={{fontSize: 30, color: 'black'}}>
              {' '}
              Loading content...{' '}
            </Text>
          </View>
        ) : (
          <>
            {theBobsBurgers?.data?.map(data => {
              return (
                <BobUsers
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  occupation={data.occupation}
                  firstEpisode={data.firstEpisode}
                  url={data.image}
                  gender={data.gender === 'Female'}
                  navigation={navigation}
                />
              );
            })}
          </>
        )}
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
export default AllUsers;
