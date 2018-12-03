import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// http://rallycoding.herokuapp.com/api/music_albums
export default () => (
  <View>
    <Header title={'Albums'} />
    <AlbumList />
  </View>
);
