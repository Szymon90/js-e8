import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withFetchData from './withFetchData';

const path = '/photos?page=1&perPage=10&orderBy=latest';

function Data(props) {
    return (
        <div style={{margin: '100px'}}>
            Data: {JSON.stringify(props.data)}
        </div>
    );
}


export default compose(
    connect(
        null,
        null,
        mergeProps
    ),
    withFetchData
)(Data);
