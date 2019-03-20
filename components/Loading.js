import React, { Component } from 'react';
import { View, Text, ActivityIndicator, BackHandler } from 'react-native';
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyDt_HOHChmX2ZLc_uPCtTSY66EFGdwwuGg",
  authDomain: "zapalski4ib1.firebaseapp.com",
  databaseURL: "https://zapalski4ib1.firebaseio.com",
  projectId: "zapalski4ib1",
  storageBucket: "zapalski4ib1.appspot.com",
  messagingSenderId: "663059612790"
};
firebase.initializeApp(config);

class Loading extends Component {
  static navigationOptions = {
    header: null,
    title: "any title",
    headerStyle: {
      backgroundColor: "#0288D1"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // componentWillMount = () => {
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  // }
  // componentWillUnmount = () => {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

  // }
  // handleBackPress = () => {
  //   this.props.navigation.navigate("main");
  //   return true;
  // }
  componentDidMount = async () => {
    await this.setState({ state: this.state })
    firebase.auth().onAuthStateChanged(user => {
      if (user === null) {
        this.props.navigation.navigate("login");
      } else {
        this.props.navigation.navigate("stations", { user: firebase.auth().currentUser.email });
      }

      // jeśli user istnieje, wtedy przechodzimy do wyświetlenia ekranu z listą danych pobranych z bazy firebase
      // jeśli nie istnieje - wtedy przechodzimy do ekranu logowania
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#FFC107" />
      </View>
    );
  }
}

export default Loading;
