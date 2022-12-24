import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Overlay} from 'react-native-elements';

const FailureOverlay = ({failureText, visible, setVisible}) => {
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}> Some thing wenr wrong! </Text>
        <Text style={styles.textSecondary}>{failureText}</Text>
        <Button title="Okay" onPress={toggleOverlay} />
      </Overlay>
    </View>
  );
};

export default FailureOverlay;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});
