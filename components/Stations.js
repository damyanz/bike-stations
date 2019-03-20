import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  Image,
  BackHandler,
  YellowBox,
  FlatList,
  ActivityIndicator
} from "react-native";
import MyButton from "./MyButton";
import firebase from "firebase";
import OneStation from './OneStation';

YellowBox.ignoreWarnings(['Setting a timer']);

class Stations extends Component {
  static navigationOptions = {
    headerLeft: null,
    title: "Stacje rowerowe",
    headerStyle: {
      backgroundColor: "#FFC107",
    },
    headerTitleStyle: {
      color: "#000000"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.state.params.user,
      dane: null,
      dataReady: false
    };
    this.stations = this.getFirebase().child("stations_big")
  }
  getFirebase() {
    return firebase.database().ref()
  }
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentDidMount = async () => {

    await this.stations.on("value", (elements) => {
      let dane = [];
      //console.log(elements)
      // wykonaj foreach na tej kolekcji, wpisując potrzebne dane do tablicy w state
      elements.forEach((item) => {
        dane.push(JSON.parse(JSON.stringify(item)))
      })
      this.setState({
        dane: dane,
        dataReady: true
      })
      //state
    })
  }
  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);

  }
  handleBackPress = () => {
    this.props.navigation.navigate("main");
    return true;
  }
  loadUsers = () => {

  }
  logout = () => {
    firebase.auth()
      .signOut()
      .then(() => this.props.navigation.navigate("loading"))
      .catch((error) => alert(error))
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={{ flex: 1, padding: 10, }}>
            <Text style={{ color: '#FFC107', fontWeight: 'bold', textAlign: 'center' }}>Witaj, {this.state.user}</Text>
          </View>
          <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-around' }}>
            <MyButton data={{ text: "MAIN PAGE" }} onPress={() => this.props.navigation.navigate("main")}></MyButton>
            <MyButton data={{ text: "LOGOUT" }} onPress={() => this.logout()}></MyButton>
          </View>
        </View>
        <View style={styles.content}>
          {
            this.state.dataReady ?
              <FlatList
                data={this.state.dane}
                renderItem={({ item }) =>

                  <OneStation data={{ stationName: item.stationName, longitude: item.longitude, latitude: item.latitude, totalDocks: item.totalDocks, statusValue: item.statusValue, availableBikes: item.availableBikes, availableDocks: item.availableDocks }} navigation={this.props.navigation}/>
                }
                keyExtractor={(item, index) => index.toString()}

              />
              :
              <ActivityIndicator size="large" color="#FFC107" />
          }

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: '80%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,

  },
  header: {
    flex: 1,
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  form: {
    alignItems: 'center',
  },

  label: {},
  button: {
  },
  content: {
    flex: 7,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Stations;
