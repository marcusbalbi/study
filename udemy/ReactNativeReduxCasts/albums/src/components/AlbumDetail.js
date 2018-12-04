import React from 'react';
import { Text, View, Image, Linking, Alert } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.imageContainer}>
          <Image style={styles.thumbnail} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.coverImage} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => { Linking.openURL(url); }}>
          CLICA AQIUO!
        </Button>
      </CardSection>
      <CardSection>
        <Button onPress={() => { debugger; console.log('teste do clique'); }}>
          Buy me!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  thumbnail: {
    width: 50,
    height: 50
  },
  infoContainer: {
    justifyContent: 'space-around',
    flex: 1
  },
  coverImage: {
    height: 400,
    flex: 1,
    width: null
  }
};
