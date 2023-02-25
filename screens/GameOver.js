import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';


const GameOver = ({roundsNumber, userNumber, onStartNewGame }) => {

  const  { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380 ) {
    imageSize = 150;
  }

  if (height < 450 ) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
          <Title>GAME OVER !</Title>
          <View style={[styles.imageContainer, imageStyle]}>
            <Image style={styles.image} source={require('../assets/success.png')} />
          </View>
          <View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}> Start New Game </PrimaryButton>
          </View>
      </View>
    </ScrollView>
  )
}

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  highlight: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.primary500,
  }
});

export default GameOver;