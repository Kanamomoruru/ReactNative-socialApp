import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicon } from "@expo/vector-icons"

export default class HomeScreen extends React.Component {
  renderPost = post => {
    return (
      <View>
        <Text>I am a post</Text>
      </View>
    )
  }
  render() {
      return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Feed</Text>
            </View>
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFECF4"
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBECF4",
    shadowColor: "#454D65",
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10
  }
});
