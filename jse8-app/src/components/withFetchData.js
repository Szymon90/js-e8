import React, { Component } from 'react';

import {
    UNSPLASH_BASE_URL,
    UNSPLASH_COMMON_HEADERS
} from '../constants'

const withFetchData = (BaseComponent) =>
    class HOC extends Component {
        state = {
            data: []
        }

        constructor() {
            super();
        }

        componentDidMount() {
            console.log('->>>>>>>> ', this.props);
            fetch(`${UNSPLASH_BASE_URL}${this.props.path}`, {
                headers: UNSPLASH_COMMON_HEADERS
            })
            .then( response => response.json() )
            .then( json => this.props.fetchDataSuccess(json));

        }

        render() {
            return <BaseComponent {...this.props} data={this.state.data} />
        }
    }

export default withFetchData;
