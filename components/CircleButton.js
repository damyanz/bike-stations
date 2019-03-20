import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, View, Image } from "react-native";

class CircleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.data.type,
            symbol: this.props.data.symbol,
        };


    }


    render() {
        return <TouchableOpacity onPress={this.props.onPress} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
                this.state.type == 'take' ?
                    <View style={styles.bigbutton}><Image style={{ width: 50, height: 50 }}
                        source={{ uri: this.state.symbol }} /></View>
                    :
                    <View style={styles.littlebutton}><Image style={{ width: 25, height: 25 }}
                        source={{ uri: this.state.symbol }} /></View>
            }

        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    text: {
        color: "#212121",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
    bigbutton: {
        width: 100,
        height: 100,
        backgroundColor: "#FF5722",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    littlebutton: {
        width: 50,
        height: 50,
        backgroundColor: "#FF5722",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

CircleButton.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CircleButton