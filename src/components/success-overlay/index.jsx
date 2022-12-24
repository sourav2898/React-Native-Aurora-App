import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Overlay} from 'react-native-elements';

const SuccessOverlay = ({successText}) => {
  const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(false);
  };

  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}> Hoooray! </Text>
        <Text style={styles.textSecondary}>
          {successText}
        </Text>
        <Button title="Okay" onPress={toggleOverlay} />
      </Overlay>
    </View>
  );
};

export default SuccessOverlay;

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
    
