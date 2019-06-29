import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withFetchData from '../withFetchData';
import { fetchDataSuccess } from './actions';

const path = '/collections?page=1&perPage=10&orderBy=latest';

const mapDispatchToProps = dispatch => ({
    fetchDataSuccess: compose(dispatch, fetchDataSuccess)
})

const mergeProps = (fromState, fromDispatch) => ({
    path,
    ...fromDispatch
})

export default compose(
    connect(null, mapDispatchToProps, mergeProps),
    withFetchData
)((props) => {console.log(props); return (<div></div>)})
