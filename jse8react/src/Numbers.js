import React, {Component} from 'react';
import { ENGINE_METHOD_ALL } from 'constants';

class Nazwa {
    wlasnosc = 100

    constructor() {

    }

    metoda(param1, param2) {

    }
}

const obj = new Nazwa();

class Numbers extends Component {
    state = {
        number: 0
    }

    constructor(...args) {
        super(...args)

        /* this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this); */
    }

    increment = () => {
        this.setState({number: this.state.number + 1 })
    }

    decrement = () => {
        this.setState({number: this.state.number - 1 })
    }

    render() {
        return (
            <div title="lalala">
                {this.state.number}
                <button
                    onClick={this.increment}
                >UP</button>
                <button
                    onClick={this.decrement}
                >DOWN</button>
            </div>
        );
    }
}

export default Numbers;
