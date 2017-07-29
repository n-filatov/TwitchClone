import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const Spinner = () => (
  <Text style={styles.spinner}>Loading</Text>
);

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateY: - Dimensions.get('window').height * 0.1 },
      { translateX: - Dimensions.get('window').width * 0.1 },
    ]
  }
})
export default Spinner;