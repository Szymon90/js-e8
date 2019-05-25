import React, { Component, useState } from 'react';

/* class Pomidor extends Component {
    state = {
        stanPomidora: 'niedojrzały'
    };

    constructor(props) {
        super(props);
        this.lol = 100;
    }

    render() {
        const {color, rodzaj} = this.props;
        const state = this.state;
        return (
            <div style={{color: color}}>Pomidor {rodzaj} - {state.stanPomidora}</div>
        );
    }
} */



function Pomidor({ color, ...props }) {
    const [stanPomidora, setStanPomidora] = useState(
        color === 'red' ? 'dojrzaly' : 'niedojrzaly'
    );

    const sun = function () {
        setStanPomidora(
            stanPomidora === 'dojrzaly' ? 'splesnialy' : 'dojrzaly'
        );
    }

    return (
        <div style={{color: color}} onClick={sun}>Pomidor {props.rodzaj} {stanPomidora}</div>
    );
}

export default Pomidor;
