import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20
  },
  container: {
    // heigth: 60,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'grey',
    shadowOpacity: 1,
    position: 'relative'
  }
});

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.titleStyle} >{this.props.title || 'Title'}</Text>
      </View>
    );
  }
}

export { Header }
