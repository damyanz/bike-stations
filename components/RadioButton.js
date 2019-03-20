import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosen: this.props.data.chosen,
            label: this.props.data.label
        };
    }

    componentDidMount = () => {
        // if (this.state.label == 'auto' || this.state.label == '4:3' || this.state.label == '640x480' || this.state.label == '1280x720') {
        //     this.setState({
        //         chosen: true,
        //     })
        // }
    }
    changeState = () => {
        this.props.click(this.state.label, this.props.data.i)
    }

    componentDidUpdate = async (prevProps) => {

        if (this.props.data.label !== prevProps.data.label) {
            console.log(`NEW PROPS IN BUTTON: ${this.props.data.label}`)
            await this.setState({
                label: this.props.data.label
            })
            console.log("RENDERUJE OD NOWA")
            this.setState({ state: this.state });
        }
        if (this.props.data.chosen !== prevProps.data.chosen) {
            console.log(`NEW PROPS IN BUTTON: ${this.props.data.chosen}`)
            await this.setState({
                chosen: this.props.data.chosen
            })
            console.log("RENDERUJE OD NOWA")
            this.setState({ state: this.state });
        }


    }

    render() {
        return (
            <TouchableOpacity onPress={this.changeState} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <View style={styles.ramka} >
                    {
                        this.state.chosen == true ?
                            <View style={styles.srodek}></View>
                            :
                            null
                    }
                </View>
                <View style={{ marginLeft: 5 }}>
                    {
                        this.state.chosen == true ?
                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>{this.state.label}</Text>
                            :
                            <Text style={{ color: '#ffffff' }}>{this.state.label}</Text>
                    }

                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    ramka: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    srodek: {
        width: 20,
        height: 20,
        borderRadius: 13,
        backgroundColor: '#FF5722'
    }
})
