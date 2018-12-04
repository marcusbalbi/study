import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

export default ({ album }) => {
  const { title, artist, thumbnail_image } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.imageContainer}>
          <Image style={styles.thumbnail} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.infoContainer}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  imageContainer: {

  },
  thumbnail: {
    width: 50,
    height: 50
  },
  infoContainer: {
    justifyContent: 'space-around',
    flex: 1
  }
};
