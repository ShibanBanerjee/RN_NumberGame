import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

// const deviceHeight = Dimensions.get('window').height;

const StartGameScreen = ({ onPickNumber }) => {

const [enteredNumber, setEnteredNumber] = useState('');

const { width, height } = useWindowDimensions();

const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
}

const resetInputHandler = () => {
    setEnteredNumber('');
}

const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);


    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
        Alert.alert('Invalid Number', 
        'Number has to be between 0 and 99',
        [{text: 'Ok', style: 'destructive', onPress: resetInputHandler }] )
        return;
    }
    
    onPickNumber(chosenNumber);
}

const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position" >
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType='number-pad' 
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton> 
                    </View>
                </View> 
            </Card>
        </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 80,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginVertical: 16,
    },
    buttonContainer: {
        flex: 1,
    }
},
);

export default StartGameScreen