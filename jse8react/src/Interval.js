import React, { Component } from 'react';

export default class Interval extends Component {
    state = {
        number: 0
    }

    constructor() {
        super();
    }

    componentDidMount() {
        this.intervalUID = setInterval(() => {
            this.setState({
                number: this.state.number + 1
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalUID);
    }

    render() {
        const { number } = this.state;

        return (
            <div>{number}</div>
        );
    }
}
