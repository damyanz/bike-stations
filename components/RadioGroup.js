import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from './RadioButton';


export default class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            options: this.props.data.options,
            type: this.props.data.type,
            chosen_index: 0
        };
    }
    componentDidMount = () => {
        if (this.state.type == 'object') {
            const pos = Object.keys(this.state.options).indexOf('auto')
            this.setState({
                chosen_index: pos
            })

        }
    }

    handleClick = (opt, which) => {
        this.props.clicked(this.state.title, opt);
        this.setState({
            chosen_index: which
        })
    }
    componentDidUpdate = async (prevProps) => {

        if (this.props.data.options !== prevProps.data.options) {
            console.log(`NEW PROPS IN GROUP: ${this.props.data.options}`)
            await this.setState({
                options: this.props.data.options
            })
            console.log(this.state.options)
            console.log("RENDERUJE OD NOWA")
            this.setState({ state: this.state });
        }

    }


    render() {
        return (
            <View style={styles.main}>
                <View style={styles.line}></View>
                <Text style={styles.setting}> {this.state.title} </Text>
                {
                    this.state.type == 'object' ?
                        Object.keys(this.state.options).map((item, i) => {
                            if (this.state.chosen_index == i)
                                return <RadioButton key={i} data={{ chosen: true, label: item, i: i }} click={(name, i) => this.handleClick(name, i)} />
                            else
                                return <RadioButton key={i} data={{ chosen: false, label: item, i: i }} click={(name, i) => this.handleClick(name, i)} />
                        }

                        )
                        :
                        this.state.options.map((item, i) => {
                            if (this.state.chosen_index == i)
                                return <RadioButton key={i} data={{ chosen: true, label: item, i: i }} click={(name, i) => this.handleClick(name, i)} />
                            else
                                return <RadioButton key={i} data={{ chosen: false, label: item, i: i }} click={(name, i) => this.handleClick(name, i)} />
                        }

                        )
                }

            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        marginTop: 10,
        marginBottom: 10
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    setting: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'right'
    }
})