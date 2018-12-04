import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;

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
    height: 300,
    flex: 1,
    width: null
  }
};
