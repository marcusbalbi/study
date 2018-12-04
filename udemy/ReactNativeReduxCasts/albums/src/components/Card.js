import React from 'react';
import { View } from 'react-native';

export default (props) => <View style={styles.container}>{props.children}</View>;

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ccc',
    borderBottomWidth: 0,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    overflow: 'scroll'
  }
};
