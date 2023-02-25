import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const Title = ({ children }) => {
  return (
    <Text style={styles.title}>{ children }</Text>
  )
}

const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      color: 'white',
      textAlign: 'center',
      borderWidth: Platform.select({ ios: 1, android: 2 }) ,
      borderColor: 'white',
      padding: 12,
      maxWidth: '80%',
      width: 300,
    }
  });

export default Title;