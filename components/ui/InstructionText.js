import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';


const InstructionText = ({ children, style }) => {
  return (
    <View>
        <Text style={[styles.instructionText, style]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
});

export default InstructionText