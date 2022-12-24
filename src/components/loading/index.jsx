import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Dialog} from 'react-native-elements';

const Loading = () => {
  return (
    <View style={styles.modal}>
      <Dialog.Loading />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.5,
  },
});
