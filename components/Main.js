import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import MyButton from "./MyButton";
import { Font } from "expo";

class Main extends Component {
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
      fontloaded: false,
      login: "",
      haslo: ""
    };
  }
  componentWillMount = async () => {
    await Font.loadAsync({
      'myfont': require("./Roboto.ttf")
    });
    this.setState({ fontloaded: true });
  };
  start = () => {
    this.props.navigation.navigate("loading");
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {this.state.fontloaded ? (
          <View style={styles.main}>
            <View style={styles.header}>
              <Text style={styles.h1}>Firebase App</Text>
              <Text style={styles.h2}>Bike stations</Text>
            </View>
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior="padding"
              enabled
            >
              <View style={styles.button}>
                <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                  <MyButton data={{ text: "START" }} onPress={() => this.start()} />
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        ) : <Text>nie zaladowano</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
    backgroundColor: "#FFC107",
    justifyContent: "center"
  },
  form: {
    margin: 10
  },
  h1: {
    fontSize: 50,
    fontWeight: "100",
    color: "#000000",
    textAlign: "center",
    fontFamily: "myfont"
  },
  h2: {
    fontSize: 20,
    fontWeight: "100",
    color: "#000000",
    textAlign: "center",
    fontFamily: "myfont"
  },

  label: {},
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "column",
  }
});

export default Main;
