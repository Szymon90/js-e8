import React, { Component } from 'react';

export default class Interval extends Component {
    state = {
        number: 0
    }

    constructor() {
        super();

        this.myRefDiv = React.createRef();
    }

    componentDidMount() {
        this.intervalUID = setInterval(() => {
            console.log(this.myRefDiv.current);
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
            <div ref={this.myRefDiv}>{number}</div>
        );
    }
}
