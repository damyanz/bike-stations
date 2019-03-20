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
    BackHandler
} from "react-native";
import { MapView } from 'expo';
import MyButton from "./MyButton";
import firebase from "firebase";

class Mapa extends Component {
    static navigationOptions = {
        //headerLeft: null,
        title: "Lokalizacja stacji na mapie",
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
            latitude: this.props.navigation.state.params.latitude,
            longitude: this.props.navigation.state.params.longitude,
            stationName: this.props.navigation.state.params.name
        };
    }
    componentWillMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    componentWillUnmount = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    
    }
    handleBackPress = () => {
        this.props.navigation.navigate("stations");
        return true;
    }
    getName= () =>{
        return this.props.navigation.state.params.name
    }
    componentDidMount = () =>{
        
    }

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                    }}
                    title={this.state.stationName}
                />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({});

export default Mapa;
