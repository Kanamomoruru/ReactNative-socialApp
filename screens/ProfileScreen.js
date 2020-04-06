import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase'

export default class ProfileScreen extends React.Component {
  render() {
      return (
          <View style={styles.container}>
              <Text>Profile Screen</Text>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
