import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from './MyButton'



class OneStation extends Component {
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
            name: this.props.data.stationName,
            latitude: this.props.data.latitude,
            longitude: this.props.data.longitude,
            total: this.props.data.totalDocks,
            status: this.props.data.statusValue,
            bikes: this.props.data.availableBikes,
            docks: this.props.data.availableDocks
        };
    }
    componentDidMount = () => {

    }
    showMap = () => {
        this.props.navigation.navigate("mapa",{title: this.state.name, name: this.state.name, latitude: this.state.latitude, longitude: this.state.longitude});
        console.log("MAPKA!")
    }
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.headerBox}><Text style={styles.header}>{this.state.name}</Text></View>
                <View style={styles.middleBox}>
                    <View style={styles.leftMiddle}>
                        <Text style={styles.details}>lat: {this.state.latitude.toFixed(8)}</Text>
                        <Text style={styles.details}>lng: {this.state.longitude.toFixed(8)}</Text>
                        <Text style={styles.details}>razem stacji: {this.state.total}</Text>
                    </View>
                    <View style={styles.rightMiddle}>
                        <View style={styles.rightTop}>
                            <View style={[styles.bikes, { flex: this.state.bikes }]}><Text style={styles.middleText}>{this.state.bikes}</Text></View>
                            <View style={[styles.docks, { flex: this.state.docks }]}><Text style={styles.middleText}>{this.state.docks}</Text></View>
                        </View>
                        {this.state.status == 'In Service' ?
                            <View style={[styles.rightBottom, { backgroundColor: '#2E8B57' }]}><Text style={styles.middleText}>DOSTĘPNA</Text></View>
                            :
                            <View style={[styles.rightBottom, { backgroundColor: '#8B0000' }]}><Text style={styles.middleText}>NIEDOSTEPNA</Text></View>

                        }
                    </View>
                </View>
                <View style={styles.mapBox}>
                    <MyButton data={{ text: "MAPA" }} onPress={() => this.showMap()} />
                </View>
            </View>
        );
    }
}

export default OneStation;
const styles = StyleSheet.create({
    main: {
        minHeight: 120,
        flexDirection: "column",
        padding: 10,
        backgroundColor: '#f5f5f5',
        marginBottom: 10
    },
    headerBox: {
        flex: 1,
        paddingBottom: 10
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    middleBox: {
        flex: 3,
        flexDirection: 'row'
    },
    leftMiddle: {
        flex: 1
    },
    rightMiddle: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2E8B57'

    },
    rightTop: {
        flex: 1,
        flexDirection: 'row'
    },
    middleText: {
        color: 'white',
    },
    bikes: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    docks: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightBottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});
