import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import Constants from "expo-constants"
import * as Permissions from "expo-permissions"
import Fire from '../Fire'

export default class PostScreen extends React.Component {
  state = {
    text: "",
    image: null
  }

  componentDidMount() {
    this.getPhotoPermission();
  }

  getPhotoPermission = async () => {
    if(Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if(status != "granted") {
        alert("We need permission to access your camera roll");
      }
    }
  }

  render() {
      return (
        <SafeAreaView style={styles.container}>
           <View style={styles.header}>
             <TouchableOpacity>
                <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
             </TouchableOpacity>
             <TouchableOpacity>
                <Text style={{fontWeight: "800"}}>Post</Text>
             </TouchableOpacity>
            
          </View>
          <View style={styles.inputContainer}>
            <Image source={require("../assets/avatar.jpg")}style={styles.avatar}></Image>
            <TextInput
              autoFocus={true}
              multiline={true}
              numberOfLines={4}
              style={{ flex: 1 }}
              placeholder="Want to share something?"
            
            ></TextInput>
          </View>

          <TouchableOpacity style={styles.photo}>
            <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
          </TouchableOpacity>
        </SafeAreaView>
         
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#D8D9DB"
  },
  inputContainer: {
    margin: 32,
    flexDirection: "row"
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16
  },
  photo: {
    alignItems: "flex-end",
    marginHorizontal: 32
  }
});