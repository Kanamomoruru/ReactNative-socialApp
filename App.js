import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import HomeScreen from './screens/HomeScreen'
import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'

import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBsv9L_yjjizJZvtnphh34R9i-RSkMYOW0",
  authDomain: "socialapp-42406.firebaseapp.com",
  databaseURL: "https://socialapp-42406.firebaseio.com",
  projectId: "socialapp-42406",
  storageBucket: "socialapp-42406.appspot.com",
  messagingSenderId: "480706681367",
  appId: "1:480706681367:web:0302003b300cfbe5a65a52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
      }
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons 
            name="ios-add-circle" 
            size={48} 
            color="#E9446A"
            style={{
              shadowColor: "#E9446A",
              shadowOffset: {width: 0, height: 0},
              shadowRadius: 10,
              shadowOpacity: 0.3
            }}
          />
        )
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={24} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#161F3D",
      inactiveTintColor: "#B8BBC4",
      showLabel: false
    }
  }
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
  
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)