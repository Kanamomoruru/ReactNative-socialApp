import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'

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


const AppStack = createAppContainer({
  Home: HomeScreen 
});

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